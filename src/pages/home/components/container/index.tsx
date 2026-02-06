interface IProps {
	children: React.ReactNode[];
}

export function Container({ children }: IProps) {
	return (
		<div className="w-screen h-screen bg-[#ddd] flex justify-center">
			<div className="flex flex-col w-[80%] lg:w-[800px] overflow-y-auto">
				{children}
			</div>
		</div>
	);
}
