<template>
    <div>
        <button style="background-color: cyan">
            {{message}}
            Click here.
        </button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                message:'Hi',
            }
        }
    };
</script>

