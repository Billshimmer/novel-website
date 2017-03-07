<template>
    <div class='Login'>
        <popup :show.sync="show" height="100%" class="popup-dialog">
            <div class="popup">
              <spinner type="bubbles" class="loading"></spinner>
            </div>
        </popup>
    </div>
</template>

<script>
import Spinner from 'vux-components/spinner';
import Popup from 'vux-components/popup';

export default {
    replace: true,
    components: {
        Popup,
        Spinner,
    },
    props: {
        show: Boolean,
    },
    data() {
        return {}
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import '~vux/src/styles/reset.less';
    @import './Loading.less';
</style>