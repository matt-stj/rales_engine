class Api::V1::MerchantsController < ApplicationController
  respond_to :json

    def index
      respond_with Merchant.all
    end

    def show
      respond_with Merchant.find_by(id: params[:id])
    end

    def find
      if params["name"]
        respond_with Merchant.find_by("#{params.first.first} ILIKE ?", params.first.last)
      else
        respond_with Merchant.find_by("#{params.first.first}": params.first.last)
      end
    end

end
