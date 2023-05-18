import Image from 'next/image'

export interface IBrandProps {
  className?: string
}

const Brand: React.FC<IBrandProps> = ({
  className = 'brand-container scale-90 fill-primary',
}) => (
  <div className={className}>
    <Image
      src='/brand.png' // Access the file from the public directory
      alt='Brand'
      width={70}
      height={70}
    />
    <h1 className='brand-text'>Web3 Realty</h1>
  </div>
)

export default Brand
