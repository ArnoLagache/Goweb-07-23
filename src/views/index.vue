<template>
    <div>
        <Menu></Menu>
        <router-view></router-view>
    </div>
</template>

<script>
import Menu from "@/components/Menu/";

export default {
    name: "Index",
    
    components: {		
        Menu		
    },
};
</script>