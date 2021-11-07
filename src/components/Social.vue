<template>
    <div id="body">
        <div class="container">  
            <div class="menu-vertical">
                <XyzTransition appear xyz="fade rotate-right ease-out-back duration-15">
                <h2 class="btn-social" @click="showSubMenu">
                    Meet me on Social
                </h2>
                </XyzTransition>
                <ul v-if="show">
                <XyzTransition appear xyz="fade small duration-10">
                    <li>
                        <button-switch></button-switch>
                    </li>
                </XyzTransition>
                </ul>
            </div>
            <div class="content">
                <XyzTransition appear xyz="fade small duration-10">
                    <router-view></router-view>
                </XyzTransition>
            </div>
        </div>
    </div>
</template>

<script>
import buttonSwitch from '../components/buttonSwitch.vue';
export default {
  components: { buttonSwitch },
    data(){
        return{
            show: false
        }
    },
    methods:{
        showSubMenu(){
            this.show = !this.show
        }
    }
}
</script>

<style scoped>
#body{
  height: 38.5rem;
  width: 100%;
}
.container{
    display: flex;
}
.menu-vertical{
    margin: 3rem;
    flex-basis: 22%;
    height: 100%;
}
.btn-social{
    margin-left: 1rem;
    padding: 1rem;
    background-color: white;
    border-radius: 30px;
    text-align: center;
    cursor: pointer;
}

.content{
    padding: 2rem;
    flex-basis: 70%;
}
</style>