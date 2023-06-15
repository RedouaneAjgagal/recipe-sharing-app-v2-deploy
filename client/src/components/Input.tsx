

interface Props {
    type: "text" | "password" | "email" | "number";
    name: string;
    placeHolder: string;
    success: boolean;
    value?: string | number
}

const Input = (props: React.PropsWithoutRef<Props>) => {
    return (
        <input type={props.type} name={props.name} placeholder={props.placeHolder} className={`border  rounded p-2 w-full ${props.success === false ? "border-red-700" : "border-gray-300"}`} defaultValue={props.value} />
    )
}

export default Input