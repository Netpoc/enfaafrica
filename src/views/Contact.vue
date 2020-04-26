<template>
    <v-container fluid>
        <topBar />
        <p class="display-2">Contact Us</p>
        <v-row>
            <v-col md="3">
                <v-img src="@/assets/mask-2.png" height="400"></v-img>
            </v-col>
            <v-col md="5">
                <v-form>
                    <v-text-field label="Full Name" prepend-icon="mdi-account">
                    </v-text-field>
                    <v-text-field label="Email" prepend-icon="mdi-at">
                    </v-text-field>
                    <v-text-field label="Phone" prepend-icon="mdi-phone">
                    </v-text-field>
                    <v-text-field label="Subject" prepend-icon="mdi-message-text">
                    </v-text-field>
                    <v-textarea rows="3" label="Message goes here...">
                    </v-textarea>
                </v-form>
                <v-btn rounded>Submit</v-btn>
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
