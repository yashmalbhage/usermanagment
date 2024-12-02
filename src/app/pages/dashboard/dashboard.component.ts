import { Component } from '@angular/core';
import { UsercrudserviceService } from '../../services/usercrudservice.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  users: any[] = [];

  constructor(private userService: UsercrudserviceService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (response: any) => {
        this.users = response.users; 
        console.log(this.users);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  deleteUser(userId: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe(
        () => {
          this.users = this.users.filter(user => user.id !== userId);
          console.log(`User with ID ${userId} deleted.`);
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    }
  }

  updateUser(user: any): void {
    const newLastName = prompt('update the data:', user.lastName);
    
    if (newLastName) {
      const updatedData = { lastName: newLastName };
      this.userService.updateUser(user.id, updatedData).subscribe(
        (updatedUser) => {
          user.lastName = updatedUser.lastName;
          console.log(`User with ID ${user.id} updated to lastName: ${updatedUser.lastName}`);
        },
        (error) => {
          console.error('Error updating user:', error);
        }
      );
    }
  }


}
