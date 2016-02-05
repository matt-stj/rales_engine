function loadMerchants(){
  $('#view-merchants').on('click', function(){
    $('#top-merchants').append(`<div class="ui active centered inline loader" id="merchants-loader"></div>`)
    $.ajax({
      type:    "GET",
      url:     "/api/v1/merchants/most_revenue?quantity=5",
      success: function(merchants) {
        $('#merchants-loader').remove()

        $.each(merchants, function(index, merchant) {
          renderMerchant(merchant)
        })

        $('#view-merchants').remove()
        $('.merchant-revenue-column').show()
      },
      error: function(xhr) {
        console.log(xhr.responseText)
      }
    })
  })
}
