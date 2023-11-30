import BaseModel from './base.model.js';

class LocationTypeModel extends BaseModel {
    constructor() {
        super('ads_location', 'ads_location_id');
    }
    // Mở rộng thêm code ở đây
    // getAllWithJoin(){
    //     return this.knex.select('*').from(this.tableName).where({});
    // }
}

export default LocationTypeModel;
