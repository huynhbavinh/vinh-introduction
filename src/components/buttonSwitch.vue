<template>
    <div>
        <div class="button-flex list-social">
            <div class="switch-label">
                <span>Facebook</span>
            </div>
            <div class="switch-toggle">
                <input type="checkbox" id="facebook" v-model="facebook">
                <label for="facebook"></label>
            </div>
        </div>
        <div class="button-flex list-social">
            <div class="switch-label">
                <span>Github</span>
            </div>
            <div class="switch-toggle ">
                <input type="checkbox" id="github" v-model="github">
                <label for="github"></label>
            </div>
        </div>
        <div class="button-flex list-social">
            <div class="switch-label">
                <span>Linkedin</span>
            </div>
            <div class="switch-toggle">
                <input type="checkbox" id="linkedin" v-model="linkedin">
                <label for="linkedin"></label>
            </div>
        </div>
       
    </div>
</template>

<script>
export default {
    data(){
        return{
            facebook:false,
            github:false,
            linkedin:false,
        }
    },
    updated(){
        this.selectOnlyone();
    },
    methods:{
        selectOnlyone(){
            if(this.facebook == this.github == this.linkedin == false){
                this.$router.push({ name: 'social' })
            }
            if(this.facebook){
                this.github = false
                this.linkedin = false
                this.showFacebook();
            }
            if(this.github){
                this.linkedin = false
                this.facebook = false
                this.showGithub();
            }
            if(this.linkedin){
                this.github = false
                this.facebook = false
                this.showLinkedin();
            }
        },
        showFacebook(){
            this.$router.push({ name: 'facebook' })
        },
        showGithub(){
            this.$router.push({ name: 'github' })
        },
        showLinkedin(){
            this.$router.push({ name: 'linkedin' })
        },
    }
}
</script>

<style scoped>
.button-flex{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.switch-label {
    margin: 10px;
    width: 70px;
}

.switch-toggle {
    height: 40px;
}

.switch-toggle input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    z-index: -2;
}

.switch-toggle input[type="checkbox"] + label {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 40px;
    border-radius: 20px;
    margin: 0;
    cursor: pointer;
    box-shadow: inset -8px -8px 15px rgba(255,255,255,.6),
                inset 10px 10px 10px rgba(0,0,0, .25);
    
}

.switch-toggle input[type="checkbox"] + label::before {
    position: absolute;
    content: 'OFF';
    font-size: 13px;
    text-align: center;
    line-height: 25px;
    top: 8px;
    left: 8px;
    width: 45px;
    height: 25px;
    border-radius: 20px;
    background-color: #d1dad3;
    box-shadow: -3px -3px 5px rgba(255,255,255,.5),
                3px 3px 5px rgba(0,0,0, .25);
    transition: .3s ease-in-out;
}

.switch-toggle input[type="checkbox"]:checked + label::before {
    left: 50%;
    content: 'ON';
    color: #fff;
    background-color: #00b33c;
    box-shadow: -3px -3px 5px rgba(255,255,255,.5),
                3px 3px 5px #00b33c;
}
.list-social{
    margin-left: 4.5rem;
    margin-top: 1rem;
    padding: 0.6rem;
    background-color: white;
    border-radius: 20px;
}

</style>