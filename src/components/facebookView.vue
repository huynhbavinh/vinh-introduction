<template>
    <div id="body">
      <h1>
        <a :href="facebookLink" target="_blank">
          <font-awesome-icon :icon="['fab', 'facebook']" />acebook
        </a>
      </h1>
      <div class="content" style="overflow: auto">
        <div class="image">
          <img :src="require('../assets/'+facebook)" alt="huynhbavinh facebook">
        </div>
      </div>
    </div>
</template>

<script>
import socialMediaLink from '../socialMediaLink'
export default {
    data(){
      return{
        facebook: 'thumbnailFB.jpg',
        facebookLink: socialMediaLink.facebook,
      }
    }
}
</script>

<style scoped>
#body{
  height: 38.5rem;
  width: 100%;
}
a{
  color: black;
}
.content{
  overflow: auto !important;
}
.image{
  padding: 10px;
}
img{
  width: 100%;
  border-radius: 30px;
}
</style>