app.component('carousel',{
    props:{iscarousel : Boolean,users : Object,carouselindex : Number},
    template: /* html */
    `
    <div v-show = "iscarousel"class="carousel bg-white w-9/12 m-auto pt-5 border-t">
      <div class="carousel-inner relative overflow-hidden w-full ">
        <!--Slide 1-->
        <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
        <div class="carousel-item absolute opacity-0" style="height:75vh;">
          <div class="block w-full" style="height: 60vh;">
              <img class="object-cover h-full w-full" :src="users[carouselindex].profile">
          </div>
          <div class="block">
            <a href="#">
              <div class="font-thin text-sm text-gray-500 pt-5">
                {{users[carouselindex].username}}
              </div>
              <div class="font-medium text-3xl text-black pt-2">
                {{users[carouselindex].description}}
              </div>
            </a>
          </div>
        </div>
        <label for="carousel-3" @click='emitLeft' class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black leading-tight text-center z-10 inset-y-0 -left-1 my-80">
          <svg viewBox="0 0 129 129" class="w-5 h-5 transform rotate-90">
            <path d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"></path>
          </svg>
        </label>
        <label for="carousel-2" @click='emitRight' class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black leading-tight text-center z-10 inset-y-0 -right-3 my-80">
          <svg viewBox="0 0 129 129" class="w-5 h-5 transform -rotate-90">
            <path d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"></path>
          </svg>
        </label>
        
        <!--Slide 2-->
        <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0" style="height:75vh;">
          <div class="block w-full" style="height: 60vh;">
              <img class="object-cover h-full w-full" :src="users[carouselindex].profile">
          </div>
          <div class="block">
            <a href="#">
              <div class="font-thin text-sm text-gray-500 pt-5">
                {{users[carouselindex].username}}
              </div>
              <div class="font-medium text-3xl text-black pt-2">
                {{users[carouselindex].description}}
              </div>
            </a>
          </div>
        </div>
        <label for="carousel-1" @click='emitLeft' class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black leading-tight text-center z-10 inset-y-0 -left-1 my-80">
          <svg viewBox="0 0 129 129" class="w-5 h-5 transform rotate-90">
            <path d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"></path>
          </svg>
        </label>
        <label for="carousel-3" @click='emitRight' class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black leading-tight text-center z-10 inset-y-0 -right-3 my-80">
          <svg viewBox="0 0 129 129" class="w-5 h-5 transform -rotate-90">
            <path d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"></path>
          </svg>
        </label> 
        
        <!--Slide 3-->
        <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0" style="height:75vh;">
          <div class="block w-full" style="height: 60vh;">
              <img class="object-cover h-full w-full" :src="users[carouselindex].profile">
          </div>
          <div class="block">
            <a href="#">
              <div class="font-thin text-sm text-gray-500 pt-5">
                {{users[carouselindex].username}}
              </div>
              <div class="font-medium text-3xl text-black pt-2">
                {{users[carouselindex].description}}
              </div>
            </a>
          </div>
        </div>
        <label for="carousel-2" @click='emitLeft' class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black leading-tight text-center z-10 inset-y-0 -left-1 my-80">
          <svg viewBox="0 0 129 129" class="w-5 h-5 transform rotate-90">
            <path d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"></path>
          </svg>
        </label>
        <label for="carousel-1" @click='emitRight' class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black leading-tight text-center z-10 inset-y-0 -right-3 my-80">
          <svg viewBox="0 0 129 129" class="w-5 h-5 transform -rotate-90">
            <path d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"></path>
          </svg>
        </label>

        <!-- Add additional indicators for each slide-->
        <ol class="carousel-indicators">  
          <li class="inline-block mr-1">
            <label for="carousel-1" class="carousel-bullet cursor-pointer block text-3xl text-gray-500">•</label>
          </li>
          <li class="inline-block mr-1">
            <label for="carousel-2" class="carousel-bullet cursor-pointer block text-3xl text-gray-500">•</label>
          </li>
          <li class="inline-block mr-1">
            <label for="carousel-3" class="carousel-bullet cursor-pointer block text-3xl text-gray-500">•</label>
          </li>
        </ol>
        
      </div>
    </div>
    `,
    methods:{
        emitLeft(){
            this.$emit('carouselleftc')
        },
        emitRight(){
            this.$emit('carouselrightc')
        }
    }
})