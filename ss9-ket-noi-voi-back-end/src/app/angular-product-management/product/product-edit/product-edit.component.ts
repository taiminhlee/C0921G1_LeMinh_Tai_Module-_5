import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl('')
  });

  id: number;
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');

      this.categoryService.getAll().subscribe(categoires => {
        this.categories = categoires;
        this.getProduct(this.id);

      });
    });
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm.setValue(product);
    });
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    product.category = {
      id: product.category
    };
    this.productService.updateProduct(id, product).subscribe(() => {
      alert('Cập nhật thành công');
    });
  }

}
