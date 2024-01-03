<template>
    <div id="search">
      <button @click="filterSigns()">Search selection</button>
      <div id="results">
        <template v-if="requestedSearch">
          <p id="results-header">
            Showing {{ preparedResults.length }} result{{
              preparedResults.length != 1 ? 's' : ''
            }}
            between {{ durationOfSelectionString }}.
            <br />
            <span class="staleness" v-if="staleResults"
              >Your selection has changed.
              <a @click="filterSigns()">Update</a> results?</span
            >
          </p>
          <search-result
            v-for="(sign, i) in preparedResults"
            :key="`filtered-sign-${i}`"
            :sign="sign.sign"
            :img-src="sign.img_src"
            :hands="'hands' in sign ? sign.hands : ''"
            :handshape="'handshape' in sign ? sign.handshape : ''"
            :location="'location' in sign ? sign.location : ''"
            :movement="'movement' in sign ? sign.movement : ''"
          />
        </template>
      </div>
    </div>
  </template>
  
  <script>
  import SearchResult from './SearchResult.vue';
  
  export default {
    name: 'Search',
    components: { SearchResult },
    data() {
      return {
        durationOfSelectionString: '',
        requestedSearch: false,
        staleResults: true,
        filteredSigns: [],
      };
    },
    computed: {
      preparedResults: function () {
        let signs = [],
          n = this.filteredSigns.length, // number of cols
          indexes = new Array(n).fill(0), // internal pointer in each col
          cols = [...Array(n).keys()]; // which cols are still available?
        //console.log("The signs are: " + JSON.stringify(this.filteredSigns));
        //console.log("The signs (shortened) are: " + JSON.stringify(this.filteredSigns.signs));
        console.log("The indexes are: " + this.signs + ", Length: " + this.signs[0].signs.length);
        console.log("The columns are: " + cols + ", Length: " + cols.length);
  
        let largestIndexLength = 0;
        for (const i in indexes) { 
          if (this.signs[i].signs.length > largestIndexLength){
            largestIndexLength = this.signs[i].signs.length;
            console.log("New Length! Now " + largestIndexLength);
          }
        }
        console.log("The largest index is " + largestIndexLength);
  
       /* while (cols.length > 0) {
          cols.forEach((col,indexCol)=>{
            results.push(this.filteredSigns[col].signs[0]);
            this.filteredSigns[col].signs.splice(0,1);
          })
        }*/
        
        for (let indexNumber = 0; indexNumber < largestIndexLength; indexNumber++) { // y
          for (const indexColumn in cols) { // x
            if (JSON.stringify(this.filteredSigns[cols[indexColumn]].signs[indexNumber]) != undefined ){
              console.log(indexColumn + ", " + indexNumber + "; " 
              + JSON.stringify(this.filteredSigns[cols[indexColumn]].signs[indexNumber]));
              signs.push(this.filteredSigns[cols[indexColumn]].signs[indexNumber]);
            }
  
          }
        }
        /*while (signs.length < 50 && cols.length > 0) {
          let i = parseInt(Math.random() * cols.length);
          signs.push(this.filteredSigns[cols[i]].signs[indexes[cols[i]]]);
          indexes[cols[i]]++;
          if (this.filteredSigns[cols[i]].signs.length == indexes[cols[i]]) {
            cols.splice(i, 1);
          }
          //console.log("Current location: Col " + cols[i] + ", index " + indexes[cols[i]] );
          //console.log("Column length: " + cols.length);
        }*/
        console.log("The indexes are: " + indexes);
        console.log("The columns are: " + cols);
  
        return signs;
      },
    },
    methods: {
      resetResults: function () {
        this.requestedSearch = false;
      },
      filterSigns: function () {
        // debugger; // eslint-disable-line no-debugger
        this.requestedSearch = true;
  
        let threshold = 1 / 2;
        this.filteredSigns = [];
        this.signs.forEach((sign) => {
          let sel = {
            start: this.selection.start * this.duration,
            end: this.selection.end * this.duration,
          };
          if (sel.start <= sign.end && sel.end >= sign.start) {
            let overlap =
                Math.min(sel.end, sign.end) - Math.max(sel.start, sign.start),
              signDuration = sign.end - sign.start,
              ratio = overlap / signDuration;
            if (ratio >= threshold) {
              this.filteredSigns.push(sign);
            }
          }
        });
  
        this.durationOfSelectionString = `${
          Math.round(this.selection.start * this.duration * 10) / 10
        } and ${
          Math.round(this.selection.end * this.duration * 10) / 10
        } seconds`;
  
        this.staleResults = false;
  
        let params = {
          current_step: this.currentStep,
          start: this.selection.start * this.duration,
          end: this.selection.end * this.duration,
          results_count: this.filteredSigns.length,
          signs: this.preparedResults.map((el) => {
            return el.sign;
          }),
        };
        this.$saveAction('search', params);
      },
    },
    watch: {
      selection: function (newVal, oldVal) {
        if (newVal.start != oldVal.start || newVal.end != oldVal.end) {
          this.staleResults = true;
        }
      },
    },
    props: {
      currentStep: { type: Number, default: -1 },
      signs: {
        type: Array,
        default: () => [],
      },
      selection: {
        type: Object,
        default: function () {
          return {
            start: 0,
            end: 1,
          };
        },
      },
      duration: { type: Number, default: 0 },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  @import '@/assets/styles/_variables.scss';
  @import '@/assets/styles/_mixins.scss';
  
  button {
    border: none;
    background-color: $accent;
    font-weight: 600;
    @include fs(0);
    padding: 0.5rem 1rem;
    width: 100%;
    cursor: pointer;
    user-select: none;
    &:hover {
      background-color: $accent;
    }
    &:active {
      transform: translateY(1px);
    }
  }
  
  #results {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 16px;
    gap: 16px;
  }
  
  #results-header {
    grid-column: 1 / -1;
    position: sticky;
    top: -16px;
    width: 100%;
    background-color: $transp-light-accent;
    backdrop-filter: blur(8px);
  
    padding: 0.5rem 0;
    @include fs(-1);
    font-weight: 440;
    z-index: 1;
  }
  
  .staleness {
    font-weight: 400;
    @include fs(-1);
    color: #444;
    a {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  </style>