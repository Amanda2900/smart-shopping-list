import { updateItem } from '../api';
import { withinTwentyFourHours } from '../utils';
import './ListItem.css';

export function ListItem({ itemData, listToken }) {
	const onChangeHandler = () => {
		// send listToken (collection) and all current item data to database api
		if (!withinTwentyFourHours(itemData.dateLastPurchased)) {
			updateItem(listToken, itemData);
		}
	};

	return (
		<li className="ListItem">
			<input
				type="checkbox"
				id={itemData.id}
				onChange={onChangeHandler}
				checked={withinTwentyFourHours(itemData.dateLastPurchased)}
			/>
			<label htmlFor={itemData.id}>{itemData.name}</label>
		</li>
	);
}
