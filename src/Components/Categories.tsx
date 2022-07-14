import React from "react";
import { CategoryMenu } from "Services/CategoriesMenuData";
import { ReactComponent as SideArrow } from "../Assets/sidearrow.svg";
import { ReactComponent as DownArrow } from "../Assets/downarrow.svg";

const Categories = () => {
	return (
		<div className="absolute w-[15rem] flex flex-col border border-[lightgray]">
			{CategoryMenu.map((category): any => (
				<div className="mx-3">
					<a
						href={category.path}
						className="border-b border-[lightgray] flex justify-between py-[1rem] items-end uppercase"
					>
						<span className="flex justify-between fill-black hover:fill-[gray] text-[black] hover:text-[gray]">
							{<category.icon className="w-[24px] h-[24px] px-1" />}
							<p>{category.title}</p>
						</span>
						<SideArrow className="w-[24px] h-[24px] fill-[gray]" />
					</a>
				</div>
			))}
			<p className="flex text-[gray] mx-3 py-[1rem]">
				see all categories{" "}
				<DownArrow className="w-[24px] h-[24px] fill-[gray]" />
			</p>
		</div>
	);
};

export default Categories;
