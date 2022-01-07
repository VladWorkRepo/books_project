<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{invalid: !name.isValid}">
            <label for="name">First Name</label>
            <input 
            type="text" 
            id="name" 
            v-model.trim="name.value"
            @blur="clearValidity('name')" 
            />
            <div v-if="!name.isValid">First Name must not be empty.</div>
        </div>
        <div class="form-control" :class="{invalid: !surname.isValid}">
            <label for="surname">Last Name</label>
            <input 
            type="text" 
            id="surname" 
            v-model.trim="surname.value"
            @blur="clearValidity('surname')"
            />
            <div v-if="!surname.isValid">Last Name must not be empty.</div>
        </div>
        <div class="form-control" :class="{invalid: !place.isValid}">
            <label for="place">Place</label>
            <input 
            type="text" 
            id="place" 
            v-model.trim="place.value"
            @blur="clearValidity('place')"
            />
            <div v-if="!place.isValid">Place field must not be empty.</div>
        </div>
        <div class="form-control" :class="{invalid: !postalCode.isValid}">
            <label for="postalCode">Postal Code</label>
            <input 
            type="text" 
            placeholder="xx-xxx"
            pattern="[0-9]{2}[-]{1}[0-9]{3}"
            id="postalCode" 
            @input="postalCodeChecker"
            @blur="clearValidity('postalCode')"
            />
            <div v-if="!postalCode.isValid">Postal Code must not be empty (example: 01-234).</div>
        </div>
        <div class="form-control" :class="{invalid: !number.isValid}">
            <label for="number">Phone number</label>
            <input 
            type="tel" 
            placeholder="+48 XXX XXX XXX" 
            pattern="[+]{1}[0-9]{2}[' ']{1}[0-9]{3}[' ']{1}[0-9]{3}[' ']{1}[0-9]{3}"
            id="number" 
            v-model.trim="number.value"
            @blur="clearValidity('number')"
            />
            <div v-if="!number.isValid">Number field must not be empty (example: +48 123 345 678).</div>
        </div>
        <div class="form-control" :class="{invalid: !email.isValid}">
            <label for="email">E-Mail</label>
            <input 
            type="email" 
            id="email" 
            placeholder="xxx@yyy.zz"
            v-model.trim="email.value"
            @blur="clearValidity('email')"
            />
            <div v-if="!email.isValid">E-Mail field must not be empty (example joe@localhost.com).</div>
        </div>
        <div class="form-control">
            <div>CAPTCHA WILL BE HERE</div>
        </div>
        <div class="discount_field" :class="{invalid: !discountCode.isValid}">
            <label for="discountCode" v-if="!discountCode.isValid">Invalid code.</label>
            <input 
            placeholder="DISCOUNT CODE" 
            type="text" 
            id="discountCode" 
            v-model.trim="discountCode.value">
            <button v-if="!discount" @click.prevent="checkDiscountCode">Check code</button>
        </div>
        <h3 :class="discount ? 'divided' : ''">${{ total }}</h3>
        <h2 v-if="discount">${{ totalAfterDiscount }}</h2>
        <base-button>SUBMIT</base-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: {
                value: '',
                isValid: true
            },
            surname: {
                value: '',
                isValid: true
            },
            place: {
                value: '',
                isValid: true
            },
            postalCode: {
                value: '',
                isValid: true
            },
            number: {
                value: '',
                isValid: true
            },
            email: {
                value: '',
                isValid: true
            },
            discountCode: {
                value: '',
                isValid: true
            },
            formIsValid: true,
            total: this.$store.getters['cart/total'],
            discount: false,
            totalAfterDiscount: 0
        }
    },
    methods: {
        postalCodeChecker(event) {
            if(event.target.value.length == 2) {
               event.target.value += '-';
            }
            this.postalCode.value = event.target.value;
        },
        checkDiscountCode() {
            this.discountCode.isValid = true;
            if(this.discountCode.value !== 'TUTORE12') {
                this.discountCode.isValid = false;
            } else {
                this.totalAfterDiscount = (this.total -(this.total * 0.10)).toFixed(2);
                this.discount = true;
            }
        },
        validateForm() {
            this.formIsValid = true;
            if(this.name.value === '') {
                this.name.isValid = false;
                this.formIsValid = false;
            }
            if(this.surname.value === '') {
                this.surname.isValid = false;
                this.formIsValid = false;
            }
            if(this.place.value === '') {
                this.place.isValid = false;
                this.formIsValid = false;
            }
            if(this.postalCode.value === '' || this.postalCode.value.length > 6 || this.postalCode.value.length < 6) {
                this.postalCode.isValid = false;
                this.formIsValid = false;
            }
            if(this.number.value === '' || this.number.value.length < 15 || this.number.value.length > 15) {
                this.number.isValid = false;
                this.formIsValid = false;
            }
            if(this.email.value.includes('.')) {
                this.email.isValid = true;
                this.formIsValid = true;
            } else {
                this.email.isValid = false;
                this.formIsValid = false;
            }
        },
        clearValidity(input) {
            this[input].isValid = true;
        },
        submitForm() {
            this.validateForm();
            console.log(this.postalCode.value);
            if (!this.formIsValid) {
                return;
            }
        }
    }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

h2 {
    color: green;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

button {
    margin-top: 2%;
}

.divided {
    text-decoration: line-through;
}

.discount_field {
    margin-top: 10%;
    width: 25%;
}

.invalid label {
  color: red;
}

.invalid input {
  border: 1px solid red;
}


</style>