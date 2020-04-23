<template>
  <v-container fluid>
    <topBar />
    <v-row justify="center">
      <p class="display-2 ma-5">Membership</p>
    </v-row>
    <v-row align="center" justify="space-around">
      <v-col md="4">
        <v-img src="@/assets/drummer.png" max-height="400"></v-img>
      </v-col>
      <v-col md="7">
        <v-card flat>
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
      </v-col>
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

