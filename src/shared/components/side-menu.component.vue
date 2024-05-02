<template>
  <pv-sidebar :visible="visible" v-on:update:visible="updateVisible">
    <div class="menu-container">
      <ul class="menu-list ">
        <li @click="closesidebar" class="menu-item">
          <i class="pi pi-bars"></i> RETURN
        </li>
        <li class="flex flex-wrap" style="padding: 12px 5px;">
          <input
              type="search"
              class="search-input"
              placeholder="Search..."
              @input="onSearchInput"
          />
        </li>
        <li class="flex flex-wrap">
          <router-link to="/creation" class="menu-item">
            <pv-button text>Creations</pv-button>
          </router-link>
        </li>
        <li class="flex flex-wrap">
          <router-link to="/publish" class="menu-item">
            <pv-button text>Your Work</pv-button>
          </router-link>
        </li>
      </ul>
      <ul class="menu-list">
        <li class="menu-item">Configuration</li>
        <li class="menu-item">Found an error? Let us know</li>
      </ul>
    </div>
  </pv-sidebar>
</template>

<script>
export default {
    name: "side-menu",
    props: {
        visible: Boolean
    },
    methods: {
        updateVisible(val) {
            this.$emit('update:visible', val);
            this.$emit('source-selected');
        },
        closesidebar() {
            this.$emit('update:visible', false);
            this.$emit('source-selected');
        }
    }
};
</script>

<style scoped>
.menu-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;

}

.menu-item {
  cursor: pointer;
  padding: 12px 5px;
  font-size: 18px;
  font-family: "Arial", sans-serif;
  line-height: 1.6;
  transition: background-color 0.3s;
  margin-bottom: 10px;
}

.menu-item:hover {
  background-color: #e0e0e0;
}

.search-input {
  display: block;
  width: 100%;
  padding: 12px 16px;
  margin-top: 12px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
}


</style>