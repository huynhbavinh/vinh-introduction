<template>
  <div id="app" class="background-color">
      <div class="menu">
        <XyzTransition appear xyz="fade small duration-20">
        <div>
          <h1>Huỳnh Bá Vinh</h1>
        </div>
        </XyzTransition>
        <div>
            <XyzTransition appear
              class="item-group"
              xyz="fade front-3 flip-down-50% duration-10 stagger-5 appear duration-20"
            >
              <ul>
                  <li class="item-group">
                    <router-link :to="{name: 'hello'}">
                      About me!
                    </router-link>
                  </li>
                  <li class="item-group">
                    <router-link :to="{name: 'social'}">
                      Me on Social
                    </router-link>
                  </li>
                  <li class="item-group">
                    <router-link :to="{name: 'resume'}">
                      Resume
                    </router-link>
                  </li>
              </ul>
            </XyzTransition>
        </div>
      </div>
      <XyzTransition appear class="item-group" xyz="fade down-100% back-5">
          <router-view></router-view>
      </XyzTransition>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
*{
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  text-decoration: none;
  overflow: hidden;

}
a{
  color: black;
}
.background-color{
  background: linear-gradient(90deg, #EEDE5C 22%, #A5E2E3 66%);
  height: 100%;
}
.menu{
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 20px 60px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
.menu div>ul li{
  display: inline-block;
  margin: 0px 15px;
}
</style>
