app.component('searchnaja',{
    props:{issearch : Boolean},
    data(){
        return {
            search: ''
        }
    },
    template: /*html*/`
    <div class="search-wrapper h-8 w-9/12 m-auto mb-3">
      <span class="material-icons pr-5" @click ='emitSearch()'>
        search
        </span>
    <input type="text" class='w-11/12 border-2 border-black rounded-full pl-3 focus:outline-none' v-model = "search" v-show = "issearch" placeholder="Search title.."/>
    </div>
    `,
    methods:{
        emitSearch(){
            this.$emit('clicksearch')
        }
    },
    watch :{
        search: function(){
            this.$emit('searched',this.search)      
        }
    }
})