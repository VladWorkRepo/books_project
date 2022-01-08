<template>
     <div class="captcha-area">
      <div class="captcha-img">
        <span class="captcha">{{ captcha }}</span>
      </div>
      <button class="reload-btn" @click.prevent="refreshCaptcha"><i class='fas fa-redo-alt'></i></button>
    </div>
    <form action="#" class="input-area">
      <input class="inputField" type="text" v-model="userInput" placeholder="Enter captcha" maxlength="6" spellcheck="false" required>
      <button @click.prevent="checkCaptcha" class="check-btn">Check</button>
    </form>
    <div class="status-text">{{ status }}</div>
</template>

<script>
export default {
    emits: ['captcha-validation'],
    data() {
        return {
            userInput: '',
            status: '',
            captcha: 'A s w a 2 w s',
            allCharacters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            randomCharacter: '',
            captchaJoined: '',
            captchaIsValid: false
        };
    },
    methods: {
        generateNewCaptcha() {
             for (let i = 0; i < 6; i++) {
                this.randomCharacter = this.allCharacters[Math.floor(Math.random() * this.allCharacters.length)];
                this.captcha += `${this.randomCharacter} `;
            }
        },
        refreshCaptcha() {
            this.removeContent();
            this.generateNewCaptcha();
        },
        checkCaptcha() {
            this.captchaJoined = this.captcha.replace(/[ ]/gi, '');
            if(this.userInput === this.captchaJoined) {
                this.status = "Congratulations! You are human 👨";
                this.captchaIsValid = true;
            } else {
                this.refreshCaptcha();
                this.status = "Blip-blop-bup 🤖";
                this.captchaIsValid = false;  
            }
            this.$emit('captcha-validation', this.captchaIsValid);
        },
        removeContent(){
            this.userInput = "";
            this.captcha = "";
            this.status = "";
        },
    }
}
</script>

<style scoped>
.captcha-area {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    margin: 20px 0 5px 0;
}
.captcha-img {
    height: 50px;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('../../img/captcha_bg.png');
    font-weight: 700;
    font-size: 19px;
}
.status-text {
    display: block;
}

i {
    font-size: 15px;
}

.inputField {
    width: 20%;
}

</style>