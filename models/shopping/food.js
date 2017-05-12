'use strict';

import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const foodSchema = new Schema({
	description: String,
	is_selected: {type: Boolean, default: true},
	icon_url: {type: String, default: ''},
	name: {type: String, isRequired: true},
	id:  {type: Number, isRequired: true},
	restaurant_id: {type: Number, isRequired: true},
	foods: [
		{
			rating: {type: Number, default: 0},
			is_featured: {type: Number, default: 0},
			restaurant_id: {type: Number, isRequired: true},
			pinyin_name: String,
			display_times: {type: Array, default: []},
			category_id: {type: Number, isRequired: true},
			attrs: [
				{
					values: [String],
					name: String
				}
			],
			description: {type: String, default: ""},
			month_sales: {type: Number, default: 0},
			rating_count: {type: Number, default: 0},
			tips: String,
			image_path: String,
			specifications: [
				{
					values: [String],
					name: String
				}
			],
			server_utc: {type: Number, default: 0},
			is_essential: {type: Boolean, default: false},
			attributes: {type: Array, default: []},
			item_id: {type: Number, isRequired: true},
			limitation: {type: Schema.Types.Mixed, default: {}},
			name: {type: String, isRequired: true},
			satisfy_count: {type: Number, default: 0},
			activity: String,
			satisfy_rate: {type: Number, default: 0},
			specfoods: [{
				original_price: {type: Number, default: 0},
				sku_id: {type: Number, isRequired: true},
				name: {type: String, isRequired: true},
				pinyin_name: String,
				restaurant_id: {type: Number, isRequired: true},
				food_id: {type: Number, isRequired: true},
				packing_fee: {type: Number, default: 0},
				recent_rating: {type: Number, default: 0},
				promotion_stock: {type: Number, default: -1},
				price: {type: Number, default: 0},
				sold_out: {type: Boolean, default: false},
				recent_popularity: {type: Number, default: 0},
				is_essential: {type: Boolean, default: false},
				item_id: {type: Number, isRequired: true},
				checkout_mode: {type: Number, default: 1},
				stock: {type: Number, default: 1000},
				specs: [
					{
						name: String,
						value: String
					}
				]
			}]
		}
	]
});

foodSchema.index({ id: 1 });

const Food = mongoose.model('Food', foodSchema);

export default Food