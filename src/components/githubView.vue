<template>
    <div id="body">
      <h1>
        <a :href="githubLink" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />Github
        </a>
      </h1>
      <div class="content" style="overflow: auto">
        <div class="image">
          <img :src="require('../assets/'+github)" alt="huynhbavinh-github">
        </div>
      </div>
    </div>
</template>

<script>
import socialMediaLink from '../socialMediaLink'
export default {
    data(){
      return{
        github: 'thumbnailGithub.jpg',
        githubLink: socialMediaLink.github,
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