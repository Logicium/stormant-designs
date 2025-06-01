<script setup lang="ts">

import ParticleCard from "@/components/cards/ParticleCard.vue";
import data from "../../data/data.ts";
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
</script>

<template>
  <div class="panelS" id="contact">
    <div class="med">GET IN TOUCH</div>
    <div class="contactGrid">

      <div class="contactSection">

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
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
          </div>
          <input type="email" placeholder="Email"/>
          <input type="text" placeholder="Phone"/>
          <textarea placeholder="What are your needs?"></textarea>
          <div class="button">SUBMIT</div>
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

.cardContainer{
  border-radius: 45px;
  background: linear-gradient(45deg, rgba(99, 85, 111, 1.000) 0.000%, rgba(85, 100, 121, 1.000) 8.333%, rgba(73, 115, 132, 1.000) 16.667%, rgba(64, 129, 145, 1.000) 25.000%, rgba(56, 142, 159, 1.000) 33.333%, rgba(51, 153, 173, 1.000) 41.667%, rgba(48, 163, 187, 1.000) 50.000%, rgba(49, 171, 201, 1.000) 58.333%, rgba(52, 177, 214, 1.000) 66.667%, rgba(58, 181, 226, 1.000) 75.000%, rgba(66, 184, 236, 1.000) 83.333%, rgba(77, 184, 245, 1.000) 91.667%, rgba(89, 182, 251, 1.000) 100.000%)
}

.contactSection{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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