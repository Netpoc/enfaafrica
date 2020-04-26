<template>
  <v-container fluid>
    <topBar />
    <v-row align="center" justify="center">
      <p class="display-2 ma-5">Membership</p>
    </v-row>
    <v-row align="center" justify="space-around">
      <v-col md="3">
        <v-img src="@/assets/drummer.png" height="420"></v-img>
      </v-col>
      <v-col md="7">
        <v-carousel
          cycle
          height="400"
          show-arrows-on-hover
          hide-delimiter-background
          align="center"
          justify="space-around"
          >
<!--  FIRST SLIDE-->
          <v-carousel-item align="start">
            
          <p class="display-1 text-justify">Criteria</p>
          <ul class="text-justify">
          <li>
          Active commitment to human rights, justice, equity and the 
          eradication of poverty and exclusion; 
          </li>
          <li>
            Consistency with the Organizations values, vision and mission; 
          </li>
          <li>
            Legal registration and a satisfactory record of operation; 
          </li>
          <li>
            Actions consistent with the Organizations governance standards;
          </li>
          <li>
            A public engagement, constituency or support base;
          </li>
          <li>
            Financial and management integrity and capacity; 
          </li>
          <li>
            Independence from a management perspective, from any one private 
            individual, company or institution other than the Association and 
            its Members. 
          </li>
        </ul>

          </v-carousel-item>

          <v-carousel-item align="center">
            
          <v-card light height="100%">
          <p class="display-1">Basic Requirement</p>
          <ul class="text-justify">
          <li>
           Any natural person may become a member of the organization; provided that:
          </li>
          <li>
            His/her application, addressed to the board through the 
            countries Chief Executive Officer with an attached 
            curriculum vitae;
          </li>
          <li>
            He/she is not less than 20years of age;
          </li>
          <li>
            He/she is of good character;
          </li>
          <li>
            He /she shall pay a non-refundable membership fee 
            of 100 dollars, payable latest January 5st of 
            each year.
          </li>
        </ul>
          </v-card>
           
          </v-carousel-item>

        </v-carousel>

      </v-col>
    </v-row>
    <v-row>

      </v-row>
  </v-container>
</template>
<script>
import topBar from '@/components/topBar.vue'
export default {
  components: {
    topBar,
  }
}
</script>

