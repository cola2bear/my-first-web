$(function () {
    $('#call').click(function () {
        $('#show').html('....loading...');

        $.ajax({
            type: "GET",
            url: "대전광역시_병원.json",
            success: function (data) {
                $('#show').html(JSON.stringify(data));
            }
        })
    })
})
