export function infixToPostfix(infixExpression) {
    console.log(infixExpression);
    const operators = {
        '&': 1,
        '|': 1
    };

    const isOperator = (char) => operators.hasOwnProperty(char);
    const getPrecedence = (operator) => operators[operator];

    const outputQueue = [];
    const operatorStack = [];

    infixExpression.split('$').forEach((token) => {
        if (/[a-zA-Z0-9]/.test(token)) {
            // Operand, enqueue to output
            outputQueue.push("[" + token + "]");
        } else if (isOperator(token)) {
            // Operator
            while (
                operatorStack.length &&
                getPrecedence(operatorStack[operatorStack.length - 1]) >= getPrecedence(token)
            ) {
                outputQueue.push(operatorStack.pop());
            }
            operatorStack.push(token);
        } else if (token === '(') {
            // Left parenthesis, push to stack
            operatorStack.push(token);
        } else if (token === ')') {
            // Right parenthesis, pop from stack to output until left parenthesis is encountered
            while (operatorStack.length && operatorStack[operatorStack.length - 1] !== '(') {
                outputQueue.push(operatorStack.pop());
            }
            operatorStack.pop(); // Pop the left parenthesis
        }
    });

    // Pop any remaining operators from the stack to the output
    while (operatorStack.length) {
        outputQueue.push(operatorStack.pop());
    }
    console.log(outputQueue.join(''));
    return outputQueue.join('');
}

export const element = `<div class="content1"><div><div><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse"><!--VABWAFAATABfADIAMAAyADAAMQAyADAAMwA=--><tr>
                <td style="width:2.7in;padding:0in 5.4pt 0in 5.4pt" valign="top" width="259">
                    <p align="center" style="margin-bottom:6.0pt;text-align:center"><b>BỘ
                            NỘI THƯƠNG </b></p>
                    <p align="center" style="margin-bottom:6.0pt;text-align:center"> </p>
                </td>
                <td style="width:261.0pt;padding:0in 5.4pt 0in 5.4pt" valign="top" width="348">
                    <p align="center" style="margin-bottom:6.0pt;text-align:center"><b>VIỆT
                            NAM DÂN CHỦ CỘNG HÒA<br />
                            Độc lập – Tự do – Hạnh phúc</b></p>
                    <p align="center" style="margin-bottom:6.0pt;text-align:center"><i> </i></p>
                </td>
            </tr>
            <tr>
                <td style="width:2.7in;padding:0in 5.4pt 0in 5.4pt" valign="top" width="259">
                    <p align="center" style="margin-bottom:6.0pt;text-align:center">Số:
                        375-NT</p>
                </td>
                <td style="width:261.0pt;padding:0in 5.4pt 0in 5.4pt" valign="top" width="348">
                    <p align="right" style="margin-bottom:6.0pt;text-align:right"><i>Hà
                            Nội, ngày 04 tháng 07 năm 1963</i></p>
                </td>
            </tr>
        </table>
        <p align="center" style="margin-bottom:6.0pt;text-align:center"><b> </b></p>
        <p align="center" style="margin-bottom:6.0pt;text-align:center"><a name="loai_1"><b><span
                        style="font-size:12.0pt">QUYẾT ĐỊNH</span></b></a><b><span style="font-size:12.0pt">
                </span></b></p>
        <p align="center" style="margin-bottom:6.0pt;text-align:center"><a name="loai_1_name">VỀ VIỆC BAN HÀNH CHẾ
                ĐỘ CÂN, ĐONG, ĐO ÁP DỤNG CHO VIỆC MUA
                BÁN, GIAO NHẬN HÀNG HÓA</a> </p>
        <p align="center" style="margin-bottom:6.0pt;text-align:center"><b><span style="font-size:12.0pt">BỘ TRƯỞNG
                    BỘ NỘI THƯƠNG </span></b></p>
        <p style="margin-bottom:6.0pt"><i>Căn cứ nghị định số 83-CP
                ngày 16-07-1963 của Hội đồng Chính phủ quy định nhiệm vụ, quyền hạn và tổ chức
                bộ máy của Bộ Nội thương; <br />
                Căn cứ sắc lệnh số 08-SL ngày 20-01-1950 và các văn bản kế tiếp quy định thống
                nhất đo lường trong mọi việc giao dịch, <br />
                Nhằm mục đích nâng cao văn minh thương nghiệp, bảo đảm quyền lợi nhân dân, đồng
                thời bảo đảm tài sản Nhà nước. </i></p>
        <p align="center" style="margin-bottom:6.0pt;text-align:center"><b><span style="font-size:12.0pt">QUYẾT ĐỊNH
                </span></b></p>
        <p style="margin-bottom:6.0pt"><a name="dieu_1"><b>Điều 1.</b>
                –</a> <a name="dieu_1_name">Nay ban hành chế độ cân, đông, đo, áp dụng cho việc
                mua bán, giao nhận hàng trong các kho, trạm, các cửa hàng mậu dịch quốc doanh,
                công tư hợp doanh, hợp tác xã mua bán, tổ hợp tác tiểu thương và những người
                buôn bán riêng rẽ.</a> </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_2"><b>Điều 2.</b>
                –</a> <a name="dieu_2_name">Chế độ này áp dụng sau hai tháng kể từ ngày ký quyết
                định này.</a> </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_3"><b>Điều 3.</b>
                –</a> <a name="dieu_3_name">Các ông Chánh văn phòng Bộ, Cục trưởng Cục Kiểm tra
                phẩm chất hàng hóa và Đo lường, các Sở, Ty Thương nghiệp, các ông Cục trưởng,
                ông Chủ nhiệm các Cục và Công ty kinh doanh, các ông cửa hàng trưởng có nhiệm vụ
                thi hành và kiểm tra việc chấp hành quyết định này.</a> </p>
        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
            <!--VABWAFAATABfADIAMAAyADAAMQAyADAAMwA=-->
            <tr>
                <td style="width:221.4pt;padding:0in 5.4pt 0in 5.4pt" valign="top" width="295">
                    <p align="center" style="margin-bottom:6.0pt;text-align:center"><b> </b></p>
                </td>
                <td style="width:240.85pt;padding:0in 5.4pt 0in 5.4pt" valign="top" width="321">
                    <p align="center" style="margin-bottom:6.0pt;text-align:center"><b>K.T.
                            BỘ TRƯỞNG BỘ NỘI THƯƠNG<br />
                            THỨ TRƯỞNG <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            Hoàng Quốc Thịnh </b></p>
                </td>
            </tr>
        </table>
        <p align="center" style="margin-bottom:6.0pt;text-align:center"><b> </b></p>
        <p align="center" style="margin-bottom:6.0pt;text-align:center"><a name="loai_2"><b><span
                        style="font-size:12.0pt">CHẾ ĐỘ</span></b></a><b><span style="font-size:12.0pt"> </span></b>
        </p>
        <p align="center" style="margin-bottom:6.0pt;text-align:center"><a name="loai_2_name">CÂN, ĐONG ĐO ÁP DỤNG
                CHO VIỆC MUA BÁN, GIAO NHẬN HÀNG TẠI
                CÁC KHO, TRẠM, CÁC CỬA HÀNG MẬU DỊCH QUỐC DOANH, CÔNG TƯ HỢP DOANH, HỢP TÁC XÃ
                MUA BÁN, TỔ HỢP TÁC TIỂU THƯƠNG VÀ CÁC NGƯỜI BUÔN BÁN RIÊNG RẼ</a> </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_1_1"><b>Điều 1.</b>
                –</a> <a name="dieu_1_1_name">Để đảm bảo việc mua bán đúng với số lượng, với
                giá trị số tiền trao đổi, nay quy định như sau chế độ đo lường áp dụng cho việc
                mua bán, giao nhận hàng tại các kho trạm, các cửa hàng mậu dịch quốc doanh,
                công tư hợp doanh, hợp tác xã mua bán, tổ hợp tác tiểu thương và những người
                buôn bán riêng rẽ.</a> </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_2_1"><b>Điều 2.</b>
                –</a> <a name="dieu_2_1_name">Những thước, dụng cụ đong, cân và quả cân dùng
                trong phạm vi kể trong điều 1 phải là những dụng cụ hợp lệ đã được cơ quan đo
                lường kiểm nghiệm, đóng dấu cho phép lưu hành là mỗi năm phải được kiểm nghiệm
                lại ít nhất một lần.</a> </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_3_1"><b>Điều 3.</b>
                –</a> <a name="dieu_3_1_name"><i>Về đo chiều dài:</i></a> </p>
        <p style="margin-bottom:6.0pt">Thước đo chiều dài phải là một
            đoạn đủ 1 mét, phân độ nhỏ nhất ít lắm phải đến 1 xăng-ti-mét (cm); nếu làm bằng
            gỗ thì hai đầu vuông góc và bịt bằng kim khí. </p>
        <p style="margin-bottom:6.0pt">Nếu dùng thước xếp thì phải đóng
            vào một thanh gỗ hay tre thẳng. </p>
        <p style="margin-bottom:6.0pt">Không được dùng thước tự khắc độ
            lấy, hoặc tự vạch lấy vào quầy, tủ hoặc thước mà hai đầu có danh nhọn đóng ngược
            để cắm mép hàng khi đo. </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_4"><b>Điều 4.</b>
                –</a> <a name="dieu_4_name">Thước đo phải đặt song song và sát mép hàng phải
                đo.</a> </p>
        <p style="margin-bottom:6.0pt">Phải bấm và gập lá hàng đúng với
            góc đầu thước khi đo. </p>
        <p style="margin-bottom:6.0pt">Nếu cần đo nhiều mét thì phải đo
            từng mét một: Không được lấy hàng đã đo rồi thay thước để đo số còn lại, cũng
            không xếp nhiều lá hàng rồi mới đo một lần. </p>
        <p style="margin-bottom:6.0pt">Không được đặt quá thấp tấm hàng
            phải đo và do căng quá độ bình thường của mỗi loại hàng. </p>
        <p style="margin-bottom:6.0pt">Nếu là hàng cần rọc hoặc cắt bằng
            kéo thì trước khi cắt phải so lại mép hai lá hàng xiết thành nếp. Vết cắt phải
            vuông góc với mép hàng, không được xiên lệch. </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_5"><b>Điều 5.</b>
                –</a> <a name="dieu_5_name"><i>Về đong.</i></a> </p>
        <p style="margin-bottom:6.0pt">Khi đong hàng lỏng phải rót hoặc
            múc vào dụng cụ đong cho đầy ngang miệng hoặc ngang vạch do cơ quan đo lường đã
            ấn định, không kể bọt, rồi mới chuyển sang đồ đựng của khách hàng không để rơi
            vãi. Nếu có rơi vãi, phải đong lại. </p>
        <p style="margin-bottom:6.0pt">Khi đong hàng khô, đổ hàng đều
            tay cho tràn miệng dùng một ống tròn bằng gỗ hay tre gạt nhẹ ngang miệng cho hết
            số thừa rồi mới chuyển sang đồ đựng của khách hàng. </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_6"><b>Điều 6.</b>
                –</a> <a name="dieu_6_name">Dụng cụ đong phải phù hợp với yêu cầu vệ sinh, phải
                sạch sẽ, được che đậy kín trong khi chưa sử dụng đến.</a> </p>
        <p style="margin-bottom:6.0pt">Những dụng cụ bẩn không được
            dùng để đong thức ăn. Sau một đợt đong, nếu không còn dùng nữa, phải rửa dụng cụ
            bằng xà phòng rồi phơi khô. </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_7"><b>Điều 7.</b>
                –</a> <a name="dieu_7_name"><i>Về cân.</i></a> </p>
        <p style="margin-bottom:6.0pt">Cân phải phù hợp với khối lượng
            hàng hóa cần cân. </p>
        <p style="margin-bottom:6.0pt">Không được cân quá sức tối đa của
            cân và dưới mức tối thiểu của cân. </p>
        <p style="margin-bottom:6.0pt">Mức tối thiểu của các loại cân
            quy định như sau: </p>
        <p style="margin-bottom:6.0pt">- Mức tối thiểu của cân treo bằng
            1/20 sức tối đa của cân; </p>
        <p style="margin-bottom:6.0pt">- Mức tối thiểu của cân bàn bằng
            1/20 sức tối đa của cân; </p>
        <p style="margin-bottom:6.0pt">- Mức tối thiểu của cân đĩa bằng
            1/50 sức tối đa của cân; </p>
        <p style="margin-bottom:6.0pt">- Mức tối thiểu của cân đồng hồ
            là mức đã ghi sẵn trên mỗi cân. </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_8"><b>Điều 8.</b>
                –</a> <a name="dieu_8_name">Cân phải đặt sao cho khách hàng có thể nhìn rõ ràng
                không lệch lạc các bộ phận thăng bằng của cân và đọc mã cân một cách dễ dàng.</a>
        </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_9"><b>Điều 9.</b>
                –</a> <a name="dieu_9_name">Cân bàn, cân đĩa, cân đồng hồ phải đặt thăng bằng
                trên một mặt phẳng ngang, cứng, không dễ bị lún.</a> </p>
        <p style="margin-bottom:6.0pt">Nếu đặt cân bàn cần được xây bằng
            gạch lát xi măng, trên có mái che mưa nắng. </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_10"><b>Điều 10.</b>
                –</a> <a name="dieu_10_name">Đối với cân treo, thì quả của cân nào chỉ dùng
                riêng cho cân đó, không được thay đổi.</a> </p>
        <p style="margin-bottom:6.0pt">Khi cân trên 5kg, phải treo cân
            lên một xà ngang. </p>
        <p style="margin-bottom:6.0pt">Khi cân dưới 5kg, phải xách bổng
            cân lên, cùi tay và cánh tay không được tác động vào đầu cân hoặc đòn cân. </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_11"><b>Điều 11.</b>
                –</a> <a name="dieu_11_name">Tuyệt đối không được dùng quả cân sứt mẻ, hoặc bất
                cứ vật gì khác để thay thế quả cân hợp lệ.</a> </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_12"><b>Điều 12.</b>
                –</a> <a name="dieu_12_name">Đặt nhẹ nhàng vật cân lên đúng giữa bàn cân, đĩa
                cân; không được vứt mạnh, lấy tay ấn mạnh xuống đĩa cân.</a> </p>
        <p style="margin-bottom:6.0pt">Nếu là cân hai đĩa thì quả cân
            cũng phải đặt đúng giữa đĩa cân. </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_13"><b>Điều 13.</b>
                –</a> <a name="dieu_13_name">Phải trừ đủ bao bì, giấy gói, dây buộc, nếu hàng
                phải gói buộc trước khi cân.</a> </p>
        <p style="margin-bottom:6.0pt">Đối với hàng lỏng phải cân với
            bì, thì sau khi cân xong và chuyển sang đồ đựng của khách hàng, phải cân lại bì
            để trừ cho đúng khối lượng. Nơi nào đã cân bao bì trước để trừ, nếu khách hàng
            yêu cầu thì phải vui vẻ cân lại. </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_14"><b>Điều 14.</b>
                –</a> <a name="dieu_14_name">Khi cân còn đang chuyển động, không được vội lấy
                hàng ra.</a> </p>
        <p style="margin-bottom:6.0pt">Sau khi cân xong và đã lấy hàng ra
            rồi thì cũng phải lấy quả cân ra, không được để luôn trên bàn cân, đĩa cân. </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_15"><b>Điều 15.</b>
                –</a> <a name="dieu_15_name">Cân và quả cân phải luôn luôn được lau chùi sạch sẽ,
                đặc biệt cân và quả cân dùng cho các thứ thực phẩm, muối và hóa chất hàng ngày
                phải lau rửa.</a></p>
        <p style="margin-bottom:6.0pt">Mỗi tuần phải kiểm tra và cho dầu
            mỡ vào các bộ phận chính như dao, gối, các khớp, v.v… </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_16"><b>Điều 16.</b>
                –</a> <a name="dieu_16_name">Sau một thời gian từ 6 háng đến 1 năm, tùy theo sử
                dụng cân nhiều hay ít, phải kiểm tra lại xem cân còn đảm bảo các tiêu chuẩn
                chính xác, nhậy, nếu không, phải đưa đi sửa chữa và kiểm nghiệm lại. Trong khoảng
                thời gian này nếu cân hỏng đột xuất cũng phải đem chữa và kiểm nghiệm lại.</a> </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_17"><b>Điều 17.</b>
                –</a> <a name="dieu_17_name"><i>Điều khoảng chung.</i></a></p>
        <p style="margin-bottom:6.0pt">Mỗi cửa hàng phải có một số dữ
            trữ bằng 10% số cân đang sử dụng trong cửa hàng và tối thiểu là một cái để thay
            thế những cái bị hỏng. </p>
        <p style="margin-bottom:6.0pt">Đối với thước và dụng cụ đong
            thì chỉ cần dự trữ một cái cho mỗi loại. </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_18"><b>Điều 18.</b>
                –</a> <a name="dieu_18_name">Cửa hàng có từ 3 quầy hàng trở lên cùng sử dụng một
                loại dụng cụ đo lường phải có dụng cụ kiểm tra công cộng để người mua hàng có
                thể tự mình kiểm tra lại số lượng đã mua.</a> </p>
        <p style="margin-bottom:6.0pt">Nơi để dụng cụ đo lường kiểm tra
            phải là nơi dễ thấy nhất trong cửa hàng và có bảng kẻ chữ to và đậm nét: “Thước
            (hay cân) kiểm tra”. </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_19"><b>Điều 19.</b>
                –</a> <a name="dieu_19_name">Mỗi ngày, trước giờ làm việc, trưởng tổ, thủ kho
                có trách nhiệm soát thử lại các dụng cụ đo lường dùng trong việc mua bán, giao
                nhận hàng và dụng cụ đo lường kiểm tra công cộng.</a> </p>
        <p style="margin-bottom:6.0pt">Trước mỗi đợt cân, nhân viên bán
            hàng cũng phải: </p>
        <p style="margin-bottom:6.0pt">a) Thử xem nơi đặt cân có phải
            là một mặt phẳng không và kê cân cho bằng. </p>
        <p style="margin-bottom:6.0pt">b) Thử lại xem cân có chính xác
            và giao động đều hòa không. </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_20"><b>Điều 20.</b>
                –</a> <a name="dieu_20_name">Mỗi khi khách hàng yêu cầu, người bán hàng phải
                vui vẻ cân, đong, đo lại, hoặc chỉ nơi để dụng cụ kiểm tra để khách hàng tự kiểm
                tra lại, nếu cửa hàng có dụng cụ kiểm tra công cộng.</a> </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_21"><b>Điều 21.</b>
                –</a> <a name="dieu_21_name">Trong một buổi, nếu phải cân liên tiếp nhiều lần,
                thì cứ nhiều nhất là sau 30 mã cân, phải thử lại cân một lần.</a> </p>
        <p style="margin-bottom:6.0pt"><a name="dieu_22"><b>Điều 22.</b>
                –</a> <a name="dieu_22_name">Xử lý:</a> </p>
        <p style="margin-bottom:6.0pt">Những người hoặc tổ chức vi phạm
            các điều khoản trên đây, tùy trường hợp nặng nhẹ và hoàn cảnh cụ thể, sẽ bị thi
            hành kỷ luật hành chính. Cấp thi hành kỷ luật là cấp chỉ đạo trực tiếp người hoặc
            tổ chức vi phạm. </p>
        <p style="margin-bottom:6.0pt">Những người hoặc tổ chưc có hành
            động gian dối về đo lường làm thiệt hại đến quyền lợi người tiêu thụ hoặc tài sản
            nhà nước sẽ bị đưa ra Tòa án nhân dân xét xử theo luật lệ hiện hành. </p>
    </div>
    <!--LdABoAHUAdgBpAGUAbgBwAGgAYQBwAGwAdQBhAHQALgB2AG4A-->
</div>
</div>`