app.component('photoitem', {
    props: { slot: Object, index: Number },
    template: /*html*/`
        <div class="block flex justify-start">
        <img :src="slot.profile" class="rounded-full w-10 h-10 mb-3 object-cover mr-3">
          <div class="font-semibold mt-2">{{slot.description}}</div>
        </div>
        <img :src="slot.pic" width="200" class="object-cover h-72 rounded-lg mb-3 mx-10" v-on:dblclick="emitCarousel(index)">
        <span v-show="slot.like" class="material-icons" v-on:click="emitDone(index)">
            favorite
        </span>
        <span v-show="!slot.like" class="material-icons" v-on:click="emitDone(index)">
            favorite_border
        </span>
        <span class="ml-2">
          {{slot.count}}
        </span>
    `,
    methods: {
        emitDone(index) {
            this.$emit('clickdone',index)
        },
        emitCarousel(index) {
            this.$emit('clickcarousel',index)
        }
    }

})