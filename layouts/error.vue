<template>
    <div>
        <h1>{{ error.message }}</h1>
        <p>{{ error.statusCode }}</p>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Something went wrong!'
        }
    },
    props: {
        error: {
            type: Object,
            required: true,
        }
    }
}
</script>
