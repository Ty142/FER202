import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
function App() {
  return (
    <div className="container mt-4 shadow rounded">
      <h2 className="text-center">Form đặt vé máy bay</h2>

      <Form className="border p-3 ">
        <Form.Group className="mb-3">
          <Form.Label>Họ tên</Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <i className="bi bi-person"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </InputGroup.Text>
            <FormControl type="text" placeholder="Họ tên" required />
            <InputGroup.Text>vnd</InputGroup.Text>
          </InputGroup>
          <Form.Text className="text-muted">
            Phải nhập 5 ký tự, in hoa...
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Địa chỉ</Form.Label>
          <FormControl type="text" placeholder="Nhập địa chỉ" required />
          <Form.Text className="text-muted">
            Phải nhập 5 ký tự, in hoa...
          </Form.Text>
        </Form.Group>

        <div className="row">
          <div className="col-md-6">
            <Form.Group className="mb-3">
              <Form.Label>Đi từ</Form.Label>
              <Form.Select>
                <option>Hà Nội</option>
                <option>TP. Hồ Chí Minh</option>
                <option>Đà Nẵng</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="mb-3">
              <Form.Label>Đến</Form.Label>
              <Form.Select>
                <option>Hà Nội</option>
                <option>TP. Hồ Chí Minh</option>
                <option>Đà Nẵng</option>
              </Form.Select>
            </Form.Group>
          </div>
        </div>

        <Form.Group className=" mb-3">
          <Form.Label>Chọn chiều đi (Khứ hồi)</Form.Label>
          <div>
            <Form.Check type="checkbox" label="Đi" name="trip" />
            <Form.Check label="Về" type="checkbox" name="trip" />
          </div>
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Đặt vé
        </Button>
      </Form>
    </div>
  );
}

export default App;
