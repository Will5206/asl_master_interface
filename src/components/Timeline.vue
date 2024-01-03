<template>
    <div
      id="timeline"
      @mousemove="mouseMove"
      @mouseup="mouseUp"
      @mouseleave="endAllDragging"
    >
      <canvas id="bg-canvas" :width="width" :height="height" />
      <div
        id="selection"
        :class="{ dragging: draggingBlock }"
        :style="{
          left: leftPos,
          right: rightPos,
          backgroundPositionX: backgroundOffset,
          backgroundPositionY: `-2px`,
        }"
        @mousedown="startDraggingBlock"
      >
        <button
          id="start"
          class="selection-boundary"
          @mousedown="startDraggingStart"
        />
        <button
          id="end"
          class="selection-boundary"
          @mousedown="startDraggingEnd"
        />
      </div>
      <div
        id="main-tick"
        class="tick"
        :class="{
          playing: playing,
          'ticker-elsewhere': draggingStart || draggingEnd,
        }"
        :style="{ left: tickPosition }"
      />
      <div
        id="phantom-tick"
        class="tick"
        :class="{ 'can-show': canShowPhantomTick }"
      />
      <p class="duration start">{{ shownDuration[0] }}</p>
      <p class="duration end">{{ shownDuration[1] }}</p>
      <p
        id="left-boundary"
        class="duration boundary left"
        :class="leftBoundaryPosition"
        :style="{ left: leftPos }"
      >
        {{ shownDuration[2] }}
      </p>
      <p
        id="right-boundary"
        class="duration boundary right"
        :class="rightBoundaryPosition"
        :style="{ right: rightPos }"
      >
        {{ shownDuration[3] }}
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Timeline',
    data() {
      return {
        startX: -1,
        endX: -1,
        offsetX: 0,
        buttonWidth: -1,
        initialMouseX: -1,
        initialStartX: -1,
        initialEndX: -1,
        initialPosition: -1,
        draggingBlock: false,
        draggingStart: false,
        draggingEnd: false,
        selectionEl: null,
        rect: null,
        height: null,
        width: null,
        canvas: null,
        ctx: null,
        howManyDrawn: 0,
      };
    },
    watch: {
      frameBaseName: function () {
        this.setupBackground();
      },
    },
    mounted() {
      this.canvas = document.getElementById('bg-canvas');
      this.ctx = this.canvas.getContext('2d');
  
      this.selectionEl = document.getElementById('selection');
  
      this.updateWidthDefs();
      this.setupBackground(); // first time
      let el = document.getElementById('start');
      this.buttonWidth = el.offsetWidth * 2;
      new ResizeObserver(this.updateWidthDefs).observe(this.$el);
  
      let windowResize;
      window.onresize = () => {
        clearTimeout(windowResize);
        // will only redraw bg if there was no resize in 50ms
        // as per https://stackoverflow.com/a/5490021/888094
        windowResize = setTimeout(this.setupBackground, 50);
      };
    },
    computed: {
      canShowPhantomTick: function () {
        return !this.draggingBlock && !this.draggingStart && !this.draggingEnd;
      },
      shownDuration: function () {
        if (
          this.duration == -1 ||
          this.startX == -1 ||
          this.endX == -1 ||
          !this.duration
        ) {
          return ['', '', '', ''];
        }
        return [
          '0',
          Math.round(this.duration),
          (this.startX * this.duration).toFixed(1),
          (this.endX * this.duration).toFixed(1),
        ];
      },
      leftBoundaryPosition: function () {
        let el = document.getElementById('left-boundary'),
          left = this.startX * this.width;
        if (!el || left <= el.offsetWidth) {
          return 'inner';
        }
        return 'outer';
      },
      rightBoundaryPosition: function () {
        let el = document.getElementById('right-boundary'),
          right = (1 - this.endX) * this.width;
        if (!el || right <= el.offsetWidth) {
          return 'inner';
        }
        return 'outer';
      },
      tickPosition: function () {
        if (!this.width || !this.rect) {
          return '';
        }
        if (this.draggingStart || this.draggingEnd) {
          return `${this.initialPosition * 100}%`;
        }
        return `${this.position * 100}%`;
      },
      startP: function () {
        return this.startX / this.width;
      },
      endP: function () {
        return this.endX / this.width;
      },
      backgroundOffset: function () {
        if (!this.rect) {
          return '';
        }
        if (this.startX < this.endX) {
          return -(this.startX * this.width) + 'px';
        }
        return -(this.endX * this.width) + 'px';
      },
      leftPos: function () {
        if (!this.rect) {
          return '';
        }
        if (this.startX < this.endX) {
          return `calc(${this.startX * 100}%)`;
        }
        return this.endX * 100 + '%';
      },
      rightPos: function () {
        if (!this.rect) {
          return '';
        }
        if (this.endX > this.startX) {
          return (1 - this.endX) * 100 + '%';
        }
        return (1 - this.startX) * 100 + '%';
      },
    },
    methods: {
      resetSelection: function () {
        this.startX = 0;
        this.endX = 1;
        this.endAllDragging();
      },
      setupBackground: function () {
        let desiredWidth = Math.max(96, Math.floor(this.width / this.duration)), // one frame per second, with min width of 48.
          height = (desiredWidth * 9) / 16,
          offsetY = Math.max(0, (this.$el.offsetHeight - height) / 2 - 4),
          maxIndex = this.frameNumber,
          minIndex = 1,
          count = Math.floor(this.width / desiredWidth),
          diff = (this.width - count * desiredWidth) / (count - 1);
  
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.howManyDrawn = 0;
        for (let i = 0; i < count; i++) {
          let index =
            Math.floor((i / count) * (maxIndex - minIndex) + minIndex) + '';
          let img = new Image();
          let path = `/frames/${this.frameBaseName}${index.padStart(3, '0')}.jpg`;
          img.src = path;
          img.onload = () => {
            this.ctx.drawImage(
              img,
              i * (desiredWidth + diff),
              offsetY,
              desiredWidth,
              height
            );
            this.howManyDrawn++;
  
            // is this the last call back?
            if (this.howManyDrawn == count) {
              this.selectionEl.style.background = `url(${this.canvas.toDataURL()})`;
              this.ctx.fillStyle = 'rgba(0,0,0,0.66)';
              this.ctx.fillRect(0, 0, this.width, this.height);
              this.$el.style.background = `url(${this.canvas.toDataURL()})`;
            }
          };
        }
      },
      updateWidthDefs: function () {
        this.rect = this.$el.getBoundingClientRect();
        if (this.startX == -1) {
          this.startX = 0;
          this.endX = 1;
        }
        if (this.width == null) {
          this.width = this.$el.offsetWidth;
          this.height = this.$el.offsetHeight;
        } else {
          let newWidth = this.$el.offsetWidth;
  
          this.width = newWidth;
          this.height = this.$el.offsetHeight;
        }
      },
      mouseUp: function (e) {
        if (
          !this.draggingStart &&
          !this.draggingEnd &&
          (!this.draggingBlock || this.initialMouseX == e.clientX)
        ) {
          this.$emit(
            'change-position',
            (e.clientX - this.rect.left) / this.width
          );
        }
        this.endAllDragging();
      },
      endAllDragging: function () {
        if (this.draggingStart || this.draggingEnd) {
          // moves the ticker back to wherever it was
          this.$emit('change-position', this.initialPosition);
        }
        this.draggingStart = false;
        this.draggingEnd = false;
        this.draggingBlock = false;
  
        let boundaries = { start: this.startX, end: this.endX };
        this.$emit('change', boundaries);
      },
      startDraggingBlock: function (e) {
        this.initialMouseX = e.clientX;
        this.initialStartX = this.startX;
        this.initialEndX = this.endX;
        this.initialPosition = this.position;
        this.draggingBlock = true;
      },
      startDraggingStart: function (e) {
        let el = document.getElementById('start');
        let bound = el.getBoundingClientRect();
        this.offsetX = e.clientX - bound.left;
        this.draggingStart = true;
      },
      startDraggingEnd: function (e) {
        let el = document.getElementById('end');
        let bound = el.getBoundingClientRect();
        this.offsetX = e.clientX - bound.right;
        this.draggingEnd = true;
      },
      mouseMove: function (event) {
        let x = event.clientX - this.rect.left - this.offsetX;
        if (this.draggingStart) {
          if ((x + this.buttonWidth) / this.width < this.endX) {
            this.startX = Math.max(x / this.width, 0);
            this.$emit('change-position', this.startX);
          }
        } else if (this.draggingEnd) {
          if ((x - this.buttonWidth) / this.width > this.startX) {
            this.endX = Math.min(x / this.width, 1);
            this.$emit('change-position', this.endX);
          }
        } else if (this.draggingBlock) {
          let offset = this.initialMouseX - event.clientX;
          let change = offset / this.width;
          if (
            this.initialStartX - change >= 0 &&
            this.initialEndX - change <= 1
          ) {
            this.startX = this.initialStartX - change;
            this.endX = this.initialEndX - change;
          } else {
            // this is just so we don't have a very small left over value either at the start or end
            if (this.initialStartX - change <= 0) {
              this.endX -= this.startX;
              this.startX = 0;
            } else {
              this.startX -= 1 - this.endX;
              this.endX = 1;
            }
          }
        } else {
          // phantom tick
          let el = document.getElementById('phantom-tick');
          el.style.left =
            ((event.clientX - this.rect.left) / this.width) * 100 + '%';
        }
      },
    },
    props: {
      frameBaseName: {
        type: String,
        default: 'frame',
      },
      frameNumber: {
        type: Number,
        default: 100,
      },
      duration: {
        type: Number,
        default: -1,
      },
      playing: {
        type: Boolean,
        default: false,
      },
      position: {
        type: Number,
        default: 0,
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  @import '@/assets/styles/_variables.scss';
  @import '@/assets/styles/_mixins.scss';
  
  #timeline {
    position: relative;
    background-position-y: center;
    background-repeat: no-repeat;
    border: 2px solid #333;
  
    &:hover {
      // cursor: text;
      #phantom-tick.can-show {
        display: block;
      }
    }
  }
  
  $b: 2px;
  $p: 0px;
  $w: 4px;
  $m_w: 3;
  $br: 0.33rem;
  
  #selection {
    position: absolute;
    top: $p;
    bottom: $p;
    background-color: rgba(255, 255, 255, 0.33);
    border-top: $b solid $accent;
    border-bottom: $b solid $accent;
    border-radius: $br;
    z-index: 1;
  
    cursor: grab;
    &.dragging {
      cursor: grabbing;
    }
  }
  
  .selection-boundary {
    position: absolute;
    top: -$b;
    bottom: -$b;
  
    cursor: ew-resize;
  
    border-width: 0;
    border-color: $accent;
    border-style: solid;
  
    z-index: 3;
    background-color: transparent;
    padding: 0;
    transition: border-width 0.33s ease;
  
    width: $w * $m_w;
    &:hover {
      width: $w * ($m_w + 1);
    }
  
    &#start {
      border-left-width: $w;
      border-top-left-radius: $br;
      border-bottom-left-radius: $br;
      &:hover {
        border-left-width: $w * $m_w;
      }
    }
    &#end {
      right: 0;
      border-right-width: $w;
      border-top-right-radius: $br;
      border-bottom-right-radius: $br;
      &:hover {
        border-right-width: $w * $m_w;
      }
    }
  }
  
  .tick {
    position: absolute;
    pointer-events: none;
    opacity: 1;
    z-index: 4;
  }
  
  #phantom-tick {
    top: 0;
    bottom: 0;
    z-index: 3;
    width: 1px;
    border-left: 1px dotted rgba(255, 255, 255, 0.5);
  
    display: none;
  }
  
  #main-tick {
    top: -3px;
    bottom: -3px;
    width: 3px;
    border-radius: 4px;
    transform: translateX(-1px);
    background-color: white;
    border-left: 1px solid white;
    border-right: 1px solid white;
  
    transition: opacity 0.5s ease;
  
    &.ticker-elsewhere {
      opacity: 0.2;
    }
  }
  
  .duration {
    position: absolute;
    user-select: none;
    @include fs(-2);
    font-weight: 450;
    color: #ddd;
    &.start,
    &.end {
      top: -24px;
    }
    &.boundary {
      font-weight: 700;
      top: 50%;
      z-index: 4;
      &.left {
        transform: translateY(-50%) translateX(calc(-100% - 0.5ch));
      }
      &.left.inner {
        transform: translateY(-50%) translateX(calc(0.5ch + 12px));
      }
      &.right {
        transform: translateY(-50%) translateX(calc(100% + 0.5ch));
      }
      &.right.inner {
        transform: translateY(-50%) translateX(calc(-0.5ch - 12px));
      }
      color: $accent;
    }
    &.start {
      left: 0;
    }
    &.end {
      right: 0;
    }
    &.boundary {
    }
  }
  
  canvas {
    display: none;
  }
  </style>