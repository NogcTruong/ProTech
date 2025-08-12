import BaseModal from "@/components/common/BaseModal";
import BaseMobileModal from "@/components/common/BaseMobileModal";
import { useEffect, useState } from "react";

type ProductSpecsModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
};

export default function ProductSpecsModal({
  open,
  onClose,
  title,
}: ProductSpecsModalProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <BaseMobileModal open={open} onClose={onClose} title={title}>
      <div className="flex-1 w-full overflow-auto pb-6">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="bg-gray-50 px-4 py-2 font-semibold" colSpan={2}>
                Thiết kế
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Chất liệu lưng ghế</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Lưới</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Chất liệu mâm ghế</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Lưới</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Khung lưng</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Nhựa</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Chân ghế</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Nhựa</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Tựa đầu</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Không có</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Bệ tỳ tay</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Điều chỉnh 4D</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Piston</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Samhongsa Class 4</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Điều chỉnh thắng lực</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Có - Dạng tay quay</span>
                </span>
              </td>
            </tr>
            <tr>
              <td className="bg-gray-50 px-4 py-2 font-semibold" colSpan={2}>
                Kích thước &amp; Trọng lượng
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">
                Kích thước/Cao tối đa lưng ghế
              </td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>50,2cm</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">
                Kích thước/Độ rộng mâm ghế
              </td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>41cm</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Kích thước/Độ sâu mâm ghế</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>66cm</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">
                Kích thước/Đường kính chân ghế
              </td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>70cm</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Trọng tải tối đa</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>159kg</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Cân nặng</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>19kg</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BaseMobileModal>
  ) : (
    <BaseModal open={open} onClose={onClose} title={title}>
      <div className="flex-1 w-full overflow-auto pb-6 !w-[600px]">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="bg-gray-50 px-4 py-2 font-semibold" colSpan={2}>
                Thiết kế
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Chất liệu lưng ghế</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Lưới</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Chất liệu mâm ghế</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Lưới</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Khung lưng</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Nhựa</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Chân ghế</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Nhựa</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Tựa đầu</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Không có</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Bệ tỳ tay</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Điều chỉnh 4D</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Piston</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Samhongsa Class 4</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Điều chỉnh thắng lực</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>Có - Dạng tay quay</span>
                </span>
              </td>
            </tr>
            <tr>
              <td className="bg-gray-50 px-4 py-2 font-semibold" colSpan={2}>
                Kích thước &amp; Trọng lượng
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">
                Kích thước/Cao tối đa lưng ghế
              </td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>50,2cm</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">
                Kích thước/Độ rộng mâm ghế
              </td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>41cm</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Kích thước/Độ sâu mâm ghế</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>66cm</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">
                Kích thước/Đường kính chân ghế
              </td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>70cm</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Trọng tải tối đa</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>159kg</span>
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-4 py-2 align-top">Cân nặng</td>
              <td className="flex-1 px-3 py-2">
                <span>
                  <span>19kg</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BaseModal>
  );
}
