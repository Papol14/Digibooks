"use client";

import { ClipLoader } from "react-spinners";

export default function Loading() {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
			<div className="text-center">
				<ClipLoader
					color="#3B82F6"
					size={50}
					aria-label="Loading..."
				/>
				<p className="mt-4 text-gray-600 font-medium">Loading...</p>
			</div>
		</div>
	);
}

