<template>
    <div id="body">
      <h1>
        <a :href="linkedinLink" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin']" />Linkedin
        </a>
      </h1>
      <div class="content" style="overflow: auto">
        <div class="image">
          <img :src="require('../assets/'+linkedin)" alt="huynhbavinh-linkedin">
        </div>
      </div>
    </div>
</template>

<script>
import socialMediaLink from '../socialMediaLink'

export default {
    data(){
      return{
        linkedin: 'thumbnailLinkedin.jpg',
        linkedinLink: socialMediaLink.linkedin,
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