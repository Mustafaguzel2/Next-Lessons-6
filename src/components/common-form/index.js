import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function CommonForm({ action, buttonText, isBtnDisabled, formControls, btnType, formData, setFormData ,handleFileChange}) {
    
   
    function renderInputByComponentType(getCurrentControl) {
        let content = null;
       
        switch (getCurrentControl.componentType) {
            case 'input':
                content = (
                    <div className="relative flex items-center mt-8">
                        <Input
                            type="text"
                            disabled={getCurrentControl.disabled}
                            placeholder={getCurrentControl.placeholder}
                            name={getCurrentControl.name}
                            id={getCurrentControl.name}
                            value={formData[getCurrentControl.name]}
                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                            className="input input-bordered w-full rounded-md px-4 border bg-gray-300 text-lg outline-none drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-white focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                    </div>
                );
                break;
            case "file":
                content = (
                    <Label htmlFor={getCurrentControl.id}
                        className="flex bg-gray-300 items-center px-6 py-1 mx-auto text-center border-2 rounded-lg ">
                        <h2>{getCurrentControl.label}</h2>
                        <Input onChange={handleFileChange} id={getCurrentControl.id} name={getCurrentControl.name} type="file" className="h-fit cursor-pointer"/>
                    </Label>
                );
                break;
            default:
                content = null;
                break;
        }
        return content;
    }

    return (
        <form action={action}>
            {
                formControls.map(control =>  
                <div key={control.name}> {/* Her bir öğe için benzersiz bir "key" prop'u ekliyoruz */}
                    {renderInputByComponentType(control)}
                </div>)
            }
            <div className="mt-6 w-full">
                <Button
                    type={btnType || "submit"}
                    disabled={isBtnDisabled}
                    className="disabled:opacity-60 flex h-11 items-center justify-center px-5 disabled:pointer-events-none">
                    {buttonText}
                </Button>
            </div>
        </form>
    )
}

export default CommonForm;