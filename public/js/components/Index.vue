<style>

</style>
<template>
    <div>
        <!-- Standard button -->
        <button type="button" class="btn btn-default">（默认样式）Default</button>

        <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
        <button type="button" class="btn btn-primary">（首选项）Primary</button>

        <!-- Indicates a successful or positive action -->
        <button type="button" class="btn btn-success">（成功）Success</button>

        <!-- Contextual button for informational alert messages -->
        <button type="button" class="btn btn-info">（一般信息）Info</button>

        <!-- Indicates caution should be taken with this action -->
        <button type="button" class="btn btn-warning">（警告）Warning</button>

        <!-- Indicates a dangerous or potentially negative action -->
        <button type="button" class="btn btn-danger">（危险）Danger</button>

        <!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
        <button type="button" class="btn btn-link">（链接）Link</button>

        <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
            Launch demo modal
        </button>

        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        data: function() {
            return {

            }
        },

    }
</script>
