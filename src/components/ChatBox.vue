<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
          bg-color="white"
          class="test"
          name="Customer"
          :text="['hey, So how does this system work?']"
          sent
      />
      <q-chat-message
          bg-color="grey"
          name="SmartSync"
          :text="['You must first register for the site and log in as a user']"
      />
      <q-chat-message
          bg-color="grey"
          name="SmartSync"
          :text="[`Next, you need to go to the 'Define Your Categories page'`]"
      />
      <q-chat-message
          bg-color="white"
          name="Customer"
          :text="['And what then?']"
          sent
      />
      <q-chat-message
          bg-color="grey"
          name="SmartSync"
          :text="[`Once you have defined the categories, you can go to the 'Your expenses' page and there manage the expenses of each category'`]"
      />
      <q-chat-message
          bg-color="grey"
          name="SmartSync"
          :text="[`Under each category you can see a summary of the total expenses for a specific category
And on the main page of the categories a summary of all expenses in all categories'`]"
      />
      <q-chat-message
          bg-color="grey"
          name="SmartSync"
      >
        <q-spinner-dots size="2rem" />
      </q-chat-message>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatBox"
}
</script>

<style scoped>

</style>