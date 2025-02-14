import styles from "../adminDialog.module.css";
import { CrossOrange } from "../../../shared/ui/Icons";
import { ButtonOrLink } from "../../../shared/ui/ButtonOrLink";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/hooks";
import { addProduct, ProductType, selectProduct } from "../../../store/slices/catalogSlice";
import { useState } from "react";
import { selectProductId } from "../../../store/slices/adminSlice";
import { AdminDialogUploadImage } from "./AdminDialogUploadImage";
import { appointments } from "../api/mock";
import { AdminDialogImageContainer } from "./AdminDialogImageContainer";
import { AppointmentSelect } from "../../../shared/ui/AppointmentSelect";
import { SizeTypeSelect } from "../../../shared/ui/SizeTypeSelect";
import { Textarea } from "../../../shared/ui/Textarea";

type AdminDialogFormProps = {
    onClose: () => void
}
export const AdminDialogForm = ({ onClose }: AdminDialogFormProps) => {
    const dispatch = useAppDispatch();
    const selectedId = useAppSelector(selectProductId);
    const selectedProduct = useAppSelector(selectProduct(selectedId ?? 0));
    const [file, setFile] = useState<string | null>(selectedProduct?.urlImg);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const product: Record<string, string | number | string[]> = {};
        const elements = event.currentTarget.elements;
        const names = [
            "name",
            "sizeType",
            "size",
            "barcode",
            "maker",
            "brand",
            "description",
            "price",
            "appointment",
        ];

        names.forEach((name) => {
            const element = elements.namedItem(name);
            if (
                element instanceof HTMLInputElement ||
                element instanceof HTMLTextAreaElement
            ) {
                product[name] =
                    name === "size" || name === "barcode" || name === "price"
                        ? parseInt(element.value)
                        : element.value;
            }
            if (element instanceof HTMLSelectElement) {
                if (element.multiple) {
                    const values = Array.from(element.options)
                        .filter((option) => option.selected)
                        .map((option) => option.text);
                    product[name] = values;
                } else {
                    product[name] = element.value;
                }
            }
        });
        product["urlImg"] = file ?? "";
        dispatch(addProduct(product as ProductType));
        onClose();
    };

    return (
        <form className={styles.form} action='' onSubmit={onSubmit}>
            <div className={styles.containerUpper}>
                <div className={styles.infoFields}>
                    <label>
                        <input
                            required
                            className={styles.inputName}
                            defaultValue={selectedProduct?.name}
                            name='name'
                            type='text'
                            placeholder='Название'
                        />
                    </label>
                    <div className={styles.sizeContainer}>
                        <label>
                            <input
                                className={styles.sizeInput}
                                defaultValue={selectedProduct?.size}
                                name='size'
                                type='number'
                                placeholder='размер'
                            />
                        </label>
                        <SizeTypeSelect sizeType={selectedProduct?.sizeType} />
                        <label>
                            <input
                                className={styles.priceInput}
                                defaultValue={selectedProduct?.price}
                                name='price'
                                type='number'
                                placeholder='цена'
                            />
                        </label>
                    </div>
                    <label>
                        <input
                            className={styles.barcodeInput}
                            defaultValue={selectedProduct?.barcode}
                            name='barcode'
                            type='number'
                            placeholder='штрихкод'
                        />
                    </label>

                    <div className={styles.brandContainer}>
                        <label>
                            <input
                                className={styles.makerInput}
                                defaultValue={selectedProduct?.maker}
                                name='maker'
                                type='text'
                                placeholder='Производитель'
                            />
                        </label>

                        <label>
                            <input
                                className={styles.brandInput}
                                defaultValue={selectedProduct?.brand}
                                name='brand'
                                type='text'
                                placeholder='Бренд'
                            />
                        </label>
                        <AppointmentSelect appointments={appointments} appointment={selectedProduct?.appointment} />
                    </div>
                </div>
                <div className={styles.imgField}>
                    {!file ?
                        <AdminDialogUploadImage setFile={setFile} /> :
                        <AdminDialogImageContainer file={file} setFile={setFile} />
                    }
                </div>
            </div>
            <div className={styles.containerLower}>
                <Textarea id="description" defaultValue={selectedProduct?.description} name='description' placeholder='Описание' />
            </div>
            <ButtonOrLink
                type='submit'
                className={styles.saveButton}
                variant='secondary'
            >
                Сохранить
            </ButtonOrLink>
        </form>
    )
}
