Rails.application.routes.draw do

    get '*path' => 'application#index'

    root to: 'application#index'
end
