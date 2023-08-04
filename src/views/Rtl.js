
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  ButtonGroup,
  Button,
  CardHeader,
  Card,
  CardTitle,
  CardBody,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem,
  FormGroup,
  Label,
  UncontrolledTooltip,
  Table,
  Input,
  Col,
  Row,
} from "reactstrap";

// core components
import {
  chartExample2,
  chartExample4,
  chartExample3,
  chartExample1,
} from "variables/charts.js";

function Rtl() {
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  const [bigChartData, setbigChartData] = React.useState("data1");
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>

                  <Col 
                    className="text-right" 
                    sm="6">
                    <h5 
                      className="card-category">
                        مجموع الشحنات
                    </h5>
                    <CardTitle 
                      tag="h2">
                        أداء
                    </CardTitle>
                  </Col>

                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-left"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={
                          classNames("btn-simple", 
                            {
                              active: bigChartData === "data1",
                            }
                          )
                        }
                        color="info"
                        id="0"
                        size="sm"
                        onClick={
                          () => setBgChartData("data1")
                        }
                      >
                        <span 
                          className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          حسابات
                        </span>
                        <span 
                          className="d-block d-sm-none">
                          <i className="ch-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={
                          classNames("btn-simple", {
                            active: bigChartData === "data2",
                          }
                          )
                        }
                        onClick={
                          () => setBgChartData("data2")
                        }
                      >
                        <span
                         className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          المشتريات
                        </span>
                        <span
                         className="d-block d-sm-none">
                          <i className="ch-icons icon-gift-2" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={
                          classNames("btn-simple", {
                            active: bigChartData === "data3",
                          })
                        }
                        onClick={
                          () => setBgChartData("data3")
                        }
                      >
                        <span
                         className="d-none d-xl-block d-sm-block d-md-block d-lg-block">
                          جلسات
                        </span>
                        <span
                         className="d-block d-sm-none">
                          <i className=" icon-tap-02 ch-icons" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div
                 className="chart-area">
                  <Line
                    options={chartExample1.options}
                    data={chartExample1[bigChartData]}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col
           className="text-right" lg="4">
            <Card
             className="card-chart">
              <CardHeader>
                <h5
                 className="card-category">شحنات كاملة</h5>
                <CardTitle
                 tag="h3">
                  <i className="ch-icons text-primary icon-bell-55 " /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div
                 className="chart-area">
                  <Line
                    options={chartExample2.options}
                    data={chartExample2.data}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col
           className="text-right" lg="4">
            <Card
             className="card-chart">
              <CardHeader>
                <h5
                 className="card-category">المبيعات اليومية</h5>
                <CardTitle tag="h3">
                  <i className="ch-icons text-info icon-delivery-fast" />{" "}
                  3,500€
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div
                 className="chart-area">
                  <Bar
                    options={chartExample3.options}
                    data={chartExample3.data}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col
           className="text-right" lg="4">
            <Card
             className="card-chart">
              <CardHeader>
                <h5
                 className="card-category">
                   المهام المكتملة
                </h5>
                <CardTitle tag="h3">
                  <i className="ch-icons icon-send text-success" /> 12,100K
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div
                 className="chart-area">
                  <Line
                    options={chartExample4.options}
                    data={chartExample4.data}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col
           className="text-center" lg="6" sm="6">
            <Card
             className="card-tasks text-left">
              <CardHeader
               className="text-right">
                <h6 className="title d-inline">تتبع</h6>{" "}
                <p className="card-category d-inline">اليوم</p>
                <UncontrolledDropdown className="float-left">
                  <DropdownToggle
                    aria-haspopup={true}
                    caret
                    data-toggle="dropdown"
                    aria-expanded={false}
                    id="dropdownMenuLink"
                    color="link"
                  >
                    <i className="ch-icons icon-settings-gear-63" />
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuLink">
                    <DropdownItem
                      onClick={(e) => e.preventDefault()}
                      href="#pablo"
                    >
                      عمل
                    </DropdownItem>
                    <DropdownItem
                      onClick={(e) => e.preventDefault()}
                      href="#pablo"
                    >
                      عمل آخر
                    </DropdownItem>
                    <DropdownItem
                      onClick={(e) => e.preventDefault()}
                      href="#pablo"
                    >
                      شيء آخر هنا
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div
                 className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td
                         className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                type="checkbox"
                                defaultValue=""
                              />
                              <span
                               className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td
                         className="text-right">
                          <p
                           className="title">مركز معالجة موقع محور</p>
                          <p
                           className="text-muted">نص آخر هناالوثائق</p>
                        </td>
                        <td
                         className="td-actions">
                          <Button
                            id="tooltip591536518"
                            color="link"
                            type="button"
                            title=""
                          >
                            <i className="ch-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            target="tooltip591536518"
                            delay={0}
                            placement="right"
                          >
                            مهمة تحرير
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td
                         className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td
                         className="text-right">
                          <p className="title">لامتثال GDPR</p>
                          <p className="text-muted">
                            حماية البيانات الشخصية والخصوصية لمواطني أوروبا
                            الناتج المحلي الإجمالي هو نظام يتطلب من الشركات
                            بالنسبة للمعاملات التي تتم داخل الدول الأعضاء في
                            الاتحاد الأوروبي.
                          </p>
                        </td>
                        <td
                         className="td-actions">
                          <Button
                            type="button"
                            color="link"
                            title=""
                            id="tooltip36890049"
                          >
                            <i className="ch-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            target="tooltip36890049"
                            delay={0}
                            placement="right"
                          >
                            مهمة تحرير
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td
                         className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td
                         className="text-right">
                          <p className="title">القضاياالقضايا</p>
                          <p className="text-muted">
                            عرضة للتسوق في شركة
                            سيكونونقال 50٪ من جميع المستجيبين أنهم سيكونون أكثر
                          </p>
                        </td>
                        <td
                         className="td-actions">
                          <Button
                            color="link"
                            title=""
                            id="tooltip5456779"
                            type="button"
                          >
                            <i className="ch-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            target="tooltip5456779"
                            delay={0}
                            placement="right"
                          >
                            مهمة تحرير
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td
                         className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultValue=""
                                defaultChecked
                                type="checkbox"
                              />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td
                         className="text-right">
                          <p className="title">
                            تصدير الملفات التي تمت معالجتها
                          </p>
                          <p className="text-muted">
                            بمجرد حدوث خرق يعرض بياناتهم الشخصية.
                            كما يبين التقرير أن المستهلكين لن يغفروا شركة بسهولة
                          </p>
                        </td>
                        <td
                         className="td-actions">
                          <Button
                            id="tooltip989428493"
                            color="link"
                            type="button"
                            title=""
                          >
                            <i className="ch-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            target="tooltip989428493"
                            delay={0}
                            placement="right"
                          >
                            مهمة تحرير
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td
                         className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                type="checkbox"
                                defaultValue=""
                              />
                              <span className="form-check-sign ">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-right">
                          <p className="  title">الوصول إلى عملية التصدير</p>
                          <p className="text-muted">
                            ٣٠ يتعلّق للإتحاد ولم, وتم هناك مدينة بتحدّي إذ, كان
                            سياسة السيء إنطلاق في قبل, مساعدة والمانيا أخذ قد.
                            بل أما أمام ماشاء الشتاء،, تكاليف الإقتصادي بـ حين.
                            بل عمل
                          </p>
                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            title=""
                            id="tooltip169784793"
                            type="button"
                          >
                            <i className="ch-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            target="tooltip169784793"
                            placement="right"
                            delay={0}
                          >
                            مهمة تحرير
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-right">
                          <p className="title">الافراج عن v2.0.0</p>
                          <p className="text-muted">
                            عن رئيس طوكيو البولندي لمّ, مايو مرجع وباءت قبل هو,
                            تسمّى الطريق الإقتصادي ذات أن. لغات الإطلاق الفرنسية
                            دار ان, بين بتخصيص الساحة اقتصادية أم. و الآخ
                          </p>
                        </td>
                        <td className="td-actions">
                          <Button
                            title=""
                            type="button"
                            color="link"
                            id="tooltip554497871"
                          >
                            <i className="ch-icons icon-settings" />
                          </Button>
                          <UncontrolledTooltip
                            target="tooltip554497871"
                            delay={0}
                            placement="right"
                          >
                            مهمة تحرير
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" sm="6">
            <Card>
              <CardHeader className="text-right">
                <CardTitle tag="h4">جدول بسيط</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>مدينة</th>
                      <th>اسم</th>
                      <th>بلد</th>
                      <th className="text-center">راتب</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>العود-تورنهاوت</td>
                      <td>رايس داكوتا</td>
                      <td>النيجر</td>
                      <td className="text-center">$36,738</td>
                    </tr>
                    <tr>
                      <td>Sinaai-واس</td>
                      <td>مينيرفا هوبر</td>
                      <td>كوراساو</td>
                      <td className="text-center">$23,789</td>
                    </tr>
                    <tr>
                      <td>بايلي</td>
                      <td>سيج رودريجيز</td>
                      <td>هولندا</td>
                      <td className="text-center">$56,142</td>
                    </tr>
                    <tr>
                      <td>فيليب شانيه</td>
                      <td>كوريا، جنوب</td>
                      <td>اوفرلاند بارك</td>
                      <td className="text-center">$38,735</td>
                    </tr>
                    <tr>
                      <td>دوريس غرين</td>
                      <td>مالاوي</td>
                      <td>المنع</td>
                      <td className="text-center">$63,542</td>
                    </tr>
                    <tr>
                      <td>ميسون بورتر</td>
                      <td>تشيلي</td>
                      <td>غلوستر</td>
                      <td className="text-center">$78,615</td>
                    </tr>
                    <tr>
                      <td>غلوستر</td>
                      <td>جون بورتر</td>
                      <td>البرتغال</td>
                      <td className="text-center">$98,615</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Rtl;
