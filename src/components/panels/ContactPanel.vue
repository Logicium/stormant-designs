<script setup lang="ts">
import { ref, reactive } from 'vue';
import ParticleCard from "@/components/cards/ParticleCard.vue";
import data from "../../data/data.ts";
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";

// Define interfaces with index signatures
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  [key: string]: string; // Add index signature
}

interface FormErrors {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  [key: string]: string; // Add index signature
}

// Form data
const formData = reactive<FormData>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
});

// Form validation
const errors = reactive<FormErrors>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
});

// Form submission state
const isSubmitting = ref(false);
const submitStatus = reactive({
  success: false,
  message: ''
});

// Error message display state
const isMessageVisible = ref(false);

// Function to show message with timeout
const showMessage = (message: string, isSuccess: boolean) => {
  submitStatus.message = message;
  submitStatus.success = isSuccess;
  isMessageVisible.value = true;

  // Hide message after 4 seconds
  setTimeout(() => {
    isMessageVisible.value = false;
  }, 4000);
};

// Validate form
const validateForm = () => {
  let isValid = true;
  let errorMessage = '';

  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key] = '';
  });

  // Validate first name
  if (!formData.firstName.trim()) {
    errors.firstName = 'First name is required';
    errorMessage = 'First name is required';
    isValid = false;
  }

  // Validate last name
  if (!formData.lastName.trim() && isValid) {
    errors.lastName = 'Last name is required';
    errorMessage = 'Last name is required';
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim() && isValid) {
    errors.email = 'Email is required';
    errorMessage = 'Email is required';
    isValid = false;
  } else if (!emailRegex.test(formData.email) && isValid) {
    errors.email = 'Please enter a valid email';
    errorMessage = 'Please enter a valid email';
    isValid = false;
  }

  // Validate phone
  if (!formData.phone.trim() && isValid) {
    errors.phone = 'Phone number is required';
    errorMessage = 'Phone number is required';
    isValid = false;
  }

  // Validate message
  if (!formData.message.trim() && isValid) {
    errors.message = 'Message is required';
    errorMessage = 'Message is required';
    isValid = false;
  }

  if (!isValid) {
    showMessage(errorMessage, false);
  }

  return isValid;
};

// Submit form
const submitForm = async () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;
  submitStatus.message = '';

  try {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    const response = await fetch(`${apiUrl}/email/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    showMessage(result.message, result.success);

    if (result.success) {
      // Reset form on success
      Object.keys(formData).forEach(key => {
        formData[key] = '';
      });
    }
  } catch (error) {
    showMessage('An error occurred. Please try again later.', false);
    console.error('Error submitting form:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="panelS" id="contact">
    <div class="med">GET IN TOUCH</div>



    <div class="contactGrid">

      <div class="contactWrap">

        <div v-if="isMessageVisible" class="global-message">
          <div class="message" :class="{ 'success': submitStatus.success, 'error': !submitStatus.success }">{{ submitStatus.message }}</div>
        </div>

        <div class="contactSection" :class="{ 'blur-effect': isMessageVisible }">

          <div class="contactInfo">
            <div>
              <div>PHONE</div>
              <div class="small">{{data.company.phone}}</div>
            </div>

            <div>
              <div>EMAIL</div>
              <div class="small">{{data.company.email}}</div>
            </div>

            <div>
              <div>ADDRESS</div>
              <div class="small">
                {{data.company.location.split(',')[0]}}
              </div>
              <div class="small">
                {{data.company.location.split(',')[1]}}
              </div>
            </div>
          </div>

          <div class="contactForm">
            <div>CONTACT US</div>
            <div class="flex">

              <input
                  type="text"
                  placeholder="First Name"
                  v-model="formData.firstName"
                  :class="{ 'error-input': errors.firstName }"
              />

              <input
                  type="text"
                  placeholder="Last Name"
                  v-model="formData.lastName"
                  :class="{ 'error-input': errors.lastName }"
              />
            </div>

            <input
                type="email"
                placeholder="Email"
                v-model="formData.email"
                :class="{ 'error-input': errors.email }"
            />

            <input
                type="text"
                placeholder="Phone"
                v-model="formData.phone"
                :class="{ 'error-input': errors.phone }"
            />

            <textarea
                placeholder="What are your needs?"
                v-model="formData.message"
                :class="{ 'error-input': errors.message }"
            ></textarea>

            <div
                class="button"
                @click="submitForm"
                :class="{ 'disabled': isSubmitting }"
            >
              {{ isSubmitting ? 'SENDING...' : 'SUBMIT' }}
            </div>
          </div>

        </div>
      </div>

      <div class="cardContainer">
        <ParticleCard id="2">
          <div>{{data.cta.content}}</div>
          <div class="socials">
            <div class="icon"><LinkedinIcon/></div>
            <div class="icon"><FacebookIcon/></div>
          </div>
        </ParticleCard>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.panelS{
  padding: 2rem;
  grid-template-rows: auto 1fr;
}

.contactGrid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  height: 100%;
}

.contactWrap{
  position: relative;
}

.cardContainer{
  border-radius: 45px;
  background: linear-gradient(45deg, rgba(99, 85, 111, 1.000) 0.000%, rgba(85, 100, 121, 1.000) 8.333%, rgba(73, 115, 132, 1.000) 16.667%, rgba(64, 129, 145, 1.000) 25.000%, rgba(56, 142, 159, 1.000) 33.333%, rgba(51, 153, 173, 1.000) 41.667%, rgba(48, 163, 187, 1.000) 50.000%, rgba(49, 171, 201, 1.000) 58.333%, rgba(52, 177, 214, 1.000) 66.667%, rgba(58, 181, 226, 1.000) 75.000%, rgba(66, 184, 236, 1.000) 83.333%, rgba(77, 184, 245, 1.000) 91.667%, rgba(89, 182, 251, 1.000) 100.000%)
}

.contactSection{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  transition: filter 0.5s ease-in-out;
}

.contactForm{
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: end;
}

input,textarea{
  border:none;
  border-bottom: 2px solid black;
  height: 45px;
  font-family: inherit;
  width: 100%;
  margin-bottom: 1rem;
}

textarea{
  height: 40%;
  resize: none;
  margin-bottom: 2rem;
}

.flex{
  display: flex;
}

.contactInfo{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding: 2rem 0;
}

.button{
  background-color: black;
  color: white;
  border-radius: 45px;
  padding: 0 2rem;
  min-height: 45px;
}

input:focus, textarea:focus{
  outline: none;
}

.icon{
  background-color: white;
  color: black;
  height: 45px;
  width: 45px;
  min-width: 45px;
  min-height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  transition: 0.5s;
  cursor: pointer;
}

.icon:hover{
  background-color: black;
  color: white;
  transition: 0.5s;
}

.socials{
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
}

.error-input {
  border-bottom: 2px solid #e74c3c !important;
}

.global-message {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: fadeIn 0.3s ease-in-out;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.message{
  height: 45px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 45px;
}

.message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.blur-effect {
  filter: blur(1px);
  transition: filter 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.button.disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (max-width: 480px) {
  .contactGrid{
    grid-template-columns: 1fr;
    grid-template-rows: auto 30vh;
  }

  .contactInfo{
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }

  .panelS{
    height: 100%;
  }
}

</style>
