import { LoadingOutlined } from "@ant-design/icons"
import { Flex, Spin } from "antd"

const Loader = () => {
  return (
    <Flex align="center">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    </Flex>
  )
}

export default Loader
