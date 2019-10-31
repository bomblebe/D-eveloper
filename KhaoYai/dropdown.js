Vue.component("DropdownItem", {
    props: ["name", "value", "active", "open", "index"],
    data() {
      return {
        reverse: false
      }
    },
    template: `
      <div class="dropdown-item" v-on:click="$emit('active', {value: value})" :class="{'active': isActive, 'open': this.open}" v-bind:style="getTransition">
        {{name}}
      </div>
  `,
    computed: {
      isActive() {
        return this.name === this.active.name;
      },
      getTransition() {
  
        if (this.open) {
          return {   
            transition: `transform .3s ${this.index * 0.3}s, opacity .3s ${this.index * 0.3}s`
            }    
        } else {
          return {   
            transition: `opacity .2s, transform 0s 0.3s`
          }  
          
        }
      }
    }
  });
  
  
  let app = new Vue({
    el: "#sort",
    template: `
      <div class="dropdown-container">
        <div class="dropdown" v-on:click="toggleOpen">
          {{getActive.name}}
        </div>
                <DropdownItem v-for="(item, index) in dropdownItems" v-on:active="setActive" :key="index" :index="index" :name="item.name" :value="item.value" :active="getActive" :open="open"></DropdownItem>
      </div>`,
    data:  {
      dropdownItems: [
        {
            name: "None",
            value: "none"
        },
        {
          name: "Date",
          value: "date"
        },
        {
          name: "Views",
          value: "views"
        },
      ],
      active: undefined,
      open: false
    },
    methods: {
      setActive(e) {
        this.active = this.dropdownItems.filter(i => {
          return i.value === e.value;
        })[0]
        this.toggleOpen();
      },
      toggleOpen() {
        this.open = !this.open;
      }
    },
    computed: {
      getActive() {
        if (!this.active) return this.dropdownItems[0];
        else return this.active;
      }
    }
  });
  
  let app2 = new Vue({
    el: "#filter",
    template: `
      <div class="dropdown-container">
        <div class="dropdown" v-on:click="toggleOpen">
          {{getActive.name}}
        </div>
                <DropdownItem v-for="(item, index) in dropdownItems" v-on:active="setActive" :key="index" :index="index" :name="item.name" :value="item.value" :active="getActive" :open="open"></DropdownItem>
      </div>`,
    data:  {
      dropdownItems: [
        {
            name: "None",
            value: "none"
        },
        {
          name: "Name",
          value: "name"
        },
        {
          name: "Tag",
          value: "tag"
        },
      ],
      active: undefined,
      open: false
    },
    methods: {
      setActive(e) {
        this.active = this.dropdownItems.filter(i => {
          return i.value === e.value;
        })[0]
        this.toggleOpen();
      },
      toggleOpen() {
        this.open = !this.open;
      }
    },
    computed: {
      getActive() {
        if (!this.active) return this.dropdownItems[0];
        else return this.active;
      }
    }
  });