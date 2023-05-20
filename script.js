window.addEventListener('DOMContentLoaded', function () {
    var avatar = document.getElementById('profile-img');
    var image = document.getElementById('uploadedAvatar');
    var input = document.getElementById('file-input');
    var cropBtn = document.getElementById('crop');
    var cropBtn1 = document.getElementById('crop1');
    var cropBtn2 = document.getElementById('crop2');
    var cropBtn3 = document.getElementById('crop3');
    var cropBtn4 = document.getElementById('crop4');

    var $modal = $('#cropAvatarmodal');
    var cropper;

    $('[data-toggle="tooltip"]').tooltip();

    input.addEventListener('change', function (e) {
        var files = e.target.files;
        var done = function (url) {
            // input.value = '';
            console.log(input.value)
            image.src = url;
            $modal.modal('show');
        };
        // var reader;
        // var file;
        // var url;

        if (files && files.length > 0) {
            let file = files[0];

            // done(URL.createObjectURL(file));
            // if (URL) {
            // } 

            // else if (FileReader) {
            reader = new FileReader();
            reader.onload = function (e) {
                done(reader.result);
            };
            reader.readAsDataURL(file);
            // }
        }
    });




    $modal.on('shown.bs.modal', function () {
        cropper = new Cropper(image, {
            aspectRatio: 1,
            viewMode: 3,
        });
    }).on('hidden.bs.modal', function () {
        cropper.destroy();
        cropper = null;
    });

    cropBtn.addEventListener('click', function () {
        // var initialAvatarURL;
        var canvas;

        $modal.modal('hide');

        if (cropper) {
            canvas = cropper.getCroppedCanvas({
                width: 160,
                height: 160,
            });
            avatar.src = canvas.toDataURL();
            avatar.classList.remove("mask-1")
            avatar.classList.remove("mask-2")
            avatar.classList.remove("mask-3")
            avatar.classList.remove("mask-4")
        }
    });
    cropBtn1.addEventListener('click', function () {
        var canvas;

        $modal.modal('hide');

        if (cropper) {
            canvas = cropper.getCroppedCanvas({
                width: 160,
                height: 160,
            });
            avatar.src = canvas.toDataURL();
            avatar.classList.add("mask-1")
            avatar.classList.remove("mask-2")
            avatar.classList.remove("mask-3")
            avatar.classList.remove("mask-4")
        }
    });
    cropBtn2.addEventListener('click', function () {
        var canvas;

        $modal.modal('hide');

        if (cropper) {
            canvas = cropper.getCroppedCanvas({
                width: 160,
                height: 160,
            });
            avatar.src = canvas.toDataURL();
            avatar.classList.remove("mask-1")
            avatar.classList.add("mask-2")
            avatar.classList.remove("mask-3")
            avatar.classList.remove("mask-4")
        }
    });
    cropBtn3.addEventListener('click', function () {
        var canvas;

        $modal.modal('hide');

        if (cropper) {
            canvas = cropper.getCroppedCanvas({
                width: 160,
                height: 160,
            });

            avatar.src = canvas.toDataURL();
            avatar.classList.remove("mask-1")
            avatar.classList.remove("mask-2")
            avatar.classList.add("mask-3")
            avatar.classList.remove("mask-4")
        }
    });
    cropBtn4.addEventListener('click', function () {
        var canvas;

        $modal.modal('hide');

        if (cropper) {
            canvas = cropper.getCroppedCanvas({
                width: 160,
                height: 160,
            });
            avatar.src = canvas.toDataURL();
            avatar.classList.remove("mask-1")
            avatar.classList.remove("mask-2")
            avatar.classList.remove("mask-3")
            avatar.classList.add("mask-4")
        }
    });

});