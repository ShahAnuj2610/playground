import React, { Component } from "react";
import { ReactiveBase, SelectedFilters, MultiList, ReactiveList } from "@appbaseio/reactivesearch";

import { booksReactiveList } from "./resultViews";

export default class MultiListDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
			>
				<div className="row">
					<div className="col">
						<MultiList
							componentId="BookSensor"
							dataField="original_series.raw"
							size={100}
							{...this.props}
						/>
					</div>

					<div className="col">
						<SelectedFilters />
						<ReactiveList
							componentId="SearchResult"
							dataField="original_title.raw"
							className="result-list-container"
							from={0}
							size={5}
							renderData={booksReactiveList}
							react={{
								and: ["BookSensor"]
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
