import DeleteIcon from "@/assets/delete.svg";
import EditIcon from "@/assets/edit.svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface IProps {
	title: string;
	message: string;
	username: string;
	createdAt: string;
}

export function Post({ createdAt, message, title, username }: IProps) {
	return (
		<Card
			className="
            w-full 
            bg-white 
            border 
            border-solid 
            border-[#ccc] 
            gap-4 
            pt-0                 
            "
		>
			<div
				className="
                flex
                bg-[#7695EC] 
                rounded-tl-xl 
                rounded-tr-xl
                p-6 justify-between
                items-center
                "
			>
				<h3 className="font-bold text-xl text-white">{title}</h3>
				<div className="flex items-center gap-6">
					<Button variant="ghost" size="icon" className="cursor-pointer">
						<img
							src={DeleteIcon}
							alt="Logo misadventure"
							className="w-[30px] h-[30px]"
						/>
					</Button>
					<Button variant="ghost" size="icon" className="cursor-pointer">
						<img
							src={EditIcon}
							alt="Logo misadventure"
							className="w-[30px] h-[30px]"
						/>
					</Button>
				</div>
			</div>
			<CardContent className="flex flex-col mt-6 gap-2">
				<div className="flex justify-between items-center">
					<p className="font-bold text-[#777777]">{`@${username}`}</p>
					<p className="text-[#777777]">{createdAt}</p>
				</div>
				<p className="whitespace-pre-wrap">{message}</p>
			</CardContent>
		</Card>
	);
}
