import {
  Table as table,
  Column as column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@table({
  timestamps: true,
  tableName: 'rides',
  modelName: 'Ride',
})
export default class Ride extends Model<Ride> {
  @column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @column({
    type: DataType.DECIMAL,
  })
  declare start_lat: number;

  @column({
    type: DataType.DECIMAL,
  })
  declare start_long: number;

  @column({
    type: DataType.DECIMAL,
  })
  declare end_lat: number;

  @column({
    type: DataType.DECIMAL,
  })
  declare end_long: number;

  @column({
    type: DataType.TEXT,
  })
  declare rider_name: string;

  @column({
    type: DataType.TEXT,
  })
  declare driver_name: string;

  @column({
    type: DataType.TEXT,
  })
  declare driver_vehicle: string;

  @CreatedAt
  @column
  declare created_at: Date;

  @UpdatedAt
  @column
  declare updated_at: Date;
}
