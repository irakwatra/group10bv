import React from "react"
import Accordion from "../Accordion/Accordion"

const Item = [
  {
    title: "How can I pay for my order?",
    content: ` For now, there is only one way of online payment. You will have to
    scan a QR code at checkout, and pay the amount via that. Cash on
    delivery is available for takeaway orders.[Note: - more payment
    gateways will be added in future.]`,
  },
  {
    title: "Is there an option for takeaway?",
    content: `Yes, there are in total two options available. You can either opt
    for delivery, in which case the item(s) will be delivered at your
    hostel's channel gate, or you can select the option for takeaway,
    and in this case, your order will be kept aside to be picked up.`,
  },
  {
    title: " Is cash on delivery available for takeaway items?",
    content: `You can either pay online or you can pay the retailer yourself
    when you come to pick up your order.`,
  },
  {
    title: " What if I receive a damaged item?",
    content: `If you recieve any damaged product, then you will have to contact
    the retailer that sold that product and notify them about it. They
    will send someone to replace your product.`,
  },
  {
    title: " Is there any cancellation option?",
    content: `For now, the only way to cancel your order is to contact the said
    retailer from the contact number provided at the website, and
    notify them about your decision. Later, a cancellation option will
    be added to the order page.`,
  },
  {
    title: " Can I order something to be delivered at a specific time?",
    content: `This is not be possible yet. You will have to contact the retailer
    yourself to make changes in the timing of delivery.`,
  },
]

const FAQ = () => {
  return (
    <div className="container py-5">
      <h2 className="fat-text pb-2 border-bottom text-center text-light">
        FAQ
      </h2>
      <div className="row justify-content-center py-5">
        {Item.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default FAQ
