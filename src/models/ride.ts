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
		id: number;

	/* eslint-disable @typescript-eslint/naming-convention */

	@column({
		type: DataType.DECIMAL,
	})
		start_lat: number;

	@column({
		type: DataType.DECIMAL,
	})
		start_long: number;

	@column({
		type: DataType.DECIMAL,
	})
		end_lat: number;

	@column({
		type: DataType.DECIMAL,
	})
		end_long: number;

	@column({
		type: DataType.TEXT,
	})
		rider_name: string;

	@column({
		type: DataType.TEXT,
	})
		driver_name: string;

	@column({
		type: DataType.TEXT,
	})
		driver_vehicle: string;

	@CreatedAt
	@column
		created_at: Date;

	@UpdatedAt
	@column
		updated_at: Date;

	/* eslint-enable @typescript-eslint/naming-convention */
}
