<template>
  <div id="body">
        <div class="avatar-container">
          <div class="box-shadow-for-overflow">
            <div class="image">
              <img :src="require('../assets/' + avatar)">
              <div class="image-alt">
                <h1>VinhHB</h1>
                <div class="social">
                  <p> Follow Me At:</p>
                  <div>
                    <a class="icon-social" :href="facebook" target="_blank">
                      <font-awesome-icon :icon="['fab', 'facebook']" />
                    </a>
                    <a class="icon-social"  :href="github" target="_blank">
                      <font-awesome-icon :icon="['fab', 'github']" />
                    </a>
                    <a class="icon-social"  :href="linkedin" target="_blank">
                      <font-awesome-icon :icon="['fab', 'linkedin']" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <XyzTransition appear xyz="fade small duration-20">
          <div class="content">
          <span class="big-word">Hello</span>
            <h1>Huỳnh Bá Vinh</h1>
            <span class="sub-title"> Software Engineer</span>
            <p>I'm Vinh, I'm 21yo, studying at VLU as a last-year student, and my major is Software Engineer. I'm interested in technology, coding, and motorcycles.
              <br>
              It's my pleasure to be your friend
            </p>
          </div>
        </XyzTransition>

  </div>
</template>

<script>
import socialMediaLink from '../socialMediaLink'
export default {
  data(){
     return{
       avatar: 'avatar.jpg',
       facebook: socialMediaLink.facebook,
       github: socialMediaLink.github,
       linkedin: socialMediaLink.linkedin
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0px;
  padding: 0px;
}
#body{
  height: 38.5rem;
  width: 95%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.image{
  max-width: 18rem;
  padding: 1rem;
  background-color: white;
  border-radius: 2rem;
  text-align: center;
  margin: 22px;
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;

}
img{
  width: 50%;
  border-radius: 100%;
}
.social,.social>p{
  font-weight: 600;
  text-transform: uppercase;
  margin: 10px 0px;
}
.icon-social{
  margin: 20px 5px;
}
.icon-social:hover{
  color: red;
}

.content{
  flex-basis: 40%;
}
.content>sub-title,
.content>p{
  margin: 10px 0px;
  font-weight: 600;
}
.content>.sub-title{
  font-style: italic;
  font-size: 0.8rem;
}
.big-word{
  font-weight: 600;
  font-size: 5rem;
}
</style>
